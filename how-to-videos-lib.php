<?php

function htv_embed_video($videoRef)
{
  return <<<HTML
  <div class='embed-container'>
  <iframe src='https://player.vimeo.com/video/{$videoRef}' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
HTML;
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

  return json_decode(file_get_contents(
    'https://vimeo.psenterprise.com/api/videos'
    . '?albums[]=4377223'
    . $topics
    . $levels
  ));
}

function htv_videos($videos)
{
  $html = array();
  foreach ($videos as $video)
  {
    list($code, $title) = explode(' ', $video->name, 2);

    $html[] = '<div class="col-md-6" style="overflow-x: hidden;">';
    $html[] = htv_embed_video($video->ref);
    $html[] = "<a style='white-space: nowrap;' href='/how-to-video/{$video->ref}' title='{$title}'>{$title}</a>";
    $html[] = "<br/><a href='/how-to-video/{$video->ref}'>{$code}</a>";
    $html[] = '<br/><br/></div>';



  }

  return implode("\n", $html);
}

function htv_video($video)
{
  list($code, $title) = explode(' ', $video->name, 2);
  $body = htv_embed_video($video->ref);

  return <<<HTML
    <div class="row">
        <div class="col-md-12">
          {$body}
              <h2>{$title}</h2>
              <p>{$code}</p>
              <p>{$video->description}</p>
        </div>
    </div>
HTML;
}

function htv_related($videos, $skip)
{
  $html = '';
  foreach ($videos as $video) {
    if ($skip === $video->ref) {
      continue;
    }
    list($code, $title) = explode(' ', $video->name, 2);

    $html .= htv_embed_video($video->ref);
    $html .= "<a title='{$title}' style='white-space: nowrap;' href='/how-to-video/{$video->ref}'>{$title}</a>";
    $html .= "<br/><a href='/how-to-video/{$video->ref}'>{$code}</a><br/><br/>";

  }


  return $html;
}
function htv_menu($filters, $page, $topic, $level)
{
  $html = '';
  $current = ['topic' => $topic, 'level' => $level];

  foreach ($filters as $filter) {

    $html .= '<h2>' . $filter->label . ' <sup>'
      . '<a href="' . '/' . $page . htv_stateless_filters($current, $filter->name, 'skip') . '">Clear</a>'
      . '</sup></h2>'
      . htv_menu_ul($filter->options, $filter->name, $current, $page);
  }
  return $html;
}

function htv_menu_ul($filters, $name, $current, $page, $index = 0)
{
  $html = '<ul style="list-style: none ;padding-left: ' . ($index * 16) . 'px">';
  foreach($filters as $filter) {
    $checked = strpos($current[$name], $filter->name);

    if ($filter->options) {
      $html .= '<li>'
        . '&#8594; ' . $filter->label
        . htv_menu_ul($filter->options, $name, $current, $page, $index + 1)
        . '</li>';
    } else {
      $html .= '<li>'
        . (false !== $checked ? '&#9745;' : '&#9744;')
        . ' <a href="' . '/' . $page . htv_stateless_filters($current, $name, $filter->name) . '">'
        . $filter->label
        . '</a>'
        . '</li>';
    }
  }
  $html .= '</ul>';
  return $html;
}

