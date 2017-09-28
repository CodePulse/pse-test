<?php

function htv_embed_video($videoRef, $autoPlay = 0)
{
  return <<<HTML
  <div class='embed-container' style='filter: drop-shadow(5px 5px 5px #222);'>
  <iframe src='https://player.vimeo.com/video/{$videoRef}?autoplay={$autoPlay}' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
HTML;
}

function htv_video_thumbnail($ref)
{
  return "<img src='/play_icon.png' style='filter: drop-shadow(5px 5px 5px #222); background: url(https://i.vimeocdn.com/video/{$ref}_640x360.jpg?r=pad); background-repeat: no-repeat; background-size: cover; ' />";

  //return "<img src='https://i.vimeocdn.com/video/{$ref}_640x360.jpg?r=pad' style='filter: drop-shadow(5px 5px 5px #222);'>";
}

function htv_filters($data, $skip)
{
  $filters = '';
  //unset($data[$skip]);
  $data = array_filter($data);
  foreach ($data as $k => $v) {


    $filters .= "/$k/$v";
  }
  return $filters;
}

function htv_stateless_filters($data, $filter, $current)
{
  $filters = '';

  foreach ($data as $k => $v) {
    $v = explode(',', $v);

    if ($k === $filter && $current == 'skip') {
      continue;
    }

    if ($k === $filter && $current != 'skip') {
      if(($key = array_search($current, $v)) !== false) {
        unset($v[$key]);
      } else {
        $v[] = $current;
      }

    }

    $v = implode(',', array_filter($v));

    if(!$v) { continue; }
    $filters .= "/$k/$v";
  }

  return $filters;
}

function htv_api_videos($topic, $level)
{
  $topics = '';
  $levels = '';

  if($topic) {
    $topics = explode(',', $topic);
    $topics = '&topics[]=' . implode('&topics[]=',$topics);
  }
  if($level) {
    $levels = explode(',', $level);
    $levels = '&levels[]=' . implode('&levels[]=',$levels);
  }

  return htv_api_get('?albums[]=4377223' . $topics . $levels);
}

function htv_api_get($params, $assoc = false)
{
  $opts = array(
    'http'=>array(
      'method'=>"GET",
      'header'=>"Accept-language: en\r\n" .
        "Cookie: foo=bar\r\n" .
        "API-TOKEN: " . getenv('DRUPAL_PSE_VIMEO_TOKEN') . "\r\n"
    )
  );
  $context = stream_context_create($opts);

  return json_decode(file_get_contents(
    getenv('DRUPAL_PSE_VIMEO_SERVICES') . '/api/videos' . $params,
    false,
    $context
  ), $assoc);

}

function htv_videos($videos, $show = 6)
{
  $html = array();
  $i = 1;
  $total = count($videos);

  foreach ($videos as $video)
  {
    list($code, $title) = explode(' ', $video->name, 2);

    $html[] = '<div class="col-md-6">';
    $html[] = "<a href='/how-to-videos/{$code}' title='{$title}'>";
    $html[] = htv_video_thumbnail($video->pictures);
    $html[] = '<div style="padding-top: 4px; min-height: 60px;">';
    $html[] = $title;
    $html[] = '</div>';
    $html[] = '</a>';

    $html[] = '</div>';

    $i++;
    if ($i > $show) {
      break;
    }

  }
  return implode("\n", $html);
}

function htv_menu($filters, $page, $current)
{
  $html = '';

  foreach ($filters as $filter) {

    $html .= '<h2 class="heading-filter-by">Filter by</h2>';


    if ($current[$filter->name]) {
      $html .=  '<a class="reset-link processed asyncBtn" style="margin: 8px 10px 0px 10px;" href="' . '/' . $page . htv_stateless_filters($current, $filter->name, 'skip') . '">Clear all</a>';
    }


    $html .= htv_menu_ul($filter->options, $filter->name, $current, $page);
  }
  return $html;
}

function htv_menu_ul($filters, $name, $current, $page, $index = 0)
{
  $anyChecked = false;
  $html = '';
  foreach($filters as $filter) {
    $checked = strpos($current[$name], $filter->name);

    if(false !== $checked) { $anyChecked = true; }


    $html .= '<li>';

    // branch
    if (!$filter->name && $filter->options) {
      $html .= '<h2 class="menuHandle" style="cursor:pointer; margin: 10px 0px; color: rgb(0, 108, 133); font-size: 18px; background-image: ' . (anyChecked($filter->options, $name, $current) ? 'url(misc/menu-expanded.png)' : 'url(misc/menu-collapsed.png)') . '; background-position: left center; background-repeat: no-repeat; padding-left: 20px; background-size: 10px 10px; "> '
        . $filter->label
        . '</h2>';
    }

    // branch leafs
    if ($filter->options) {
      $html .= htv_menu_ul($filter->options, $name, $current, $page, $index + 1);
    }

    // leaf
    if ($filter->name && !$filter->options) {

      $html .= ' <a class="asyncBtn" style="color: rgb(88, 89, 91);" href="' . '/' . $page . htv_stateless_filters($current, $name, $filter->name) . '">'
      . (false !== $checked ? '&#9745;' : '&#9744;')
      . ' ' . $filter->label
      . '</a>';
    }

    // disabled leaf
    if (!$filter->name && !$filter->options) {
      $html .= "<span style='color: silver;'>&#9744; {$filter->label} [coming soon]</span> ";
    }

    $html .= '</li>';
  }

  $html = '<ul style="' . ($index > 0 && false === $anyChecked ? 'display: none;': '') . '  list-style: none ; padding-left: ' . ($index * 16) . 'px">'
    . $html
    . '</ul>';

  return $html;
}

function anyChecked($filters, $name, $current)
{
  $anyChecked = FALSE;
  foreach($filters as $filter) {
    $checked = strpos($current[$name], $filter->name);
    if (FALSE !== $checked) {
      $anyChecked = TRUE;
      break;
    }
  }

  return $anyChecked;
}

class PSEVimeoClient
{
  private $service;

  private $feedback = '/api/videos/feedback';

  private function httpPost($url,$params, $headers = false)
  {
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_HEADER, false);
    if($headers) {
      curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
    $output=curl_exec($ch);
    curl_close($ch);
    return $output;

  }

  public function __construct($service)
  {
    $this->service = $service;
  }

  public function addFeedback($payload)
  {
    $this->httpPost(
      $this->service . $this->feedback,
      $payload,
      array(
        'Api-Token: ' . getenv('DRUPAL_PSE_VIMEO_TOKEN')
      )
    );
  }
}