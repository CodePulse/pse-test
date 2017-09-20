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

function htv_videos($videos, $show = 6)
{
  $html = array();
  $i = 1;
  $total = count($videos);

  foreach ($videos as $video)
  {
    list($code, $title) = explode(' ', $video->name, 2);

    $html[] = '<div class="col-md-6">';
    $html[] = htv_embed_video($video->ref);
    $html[] = '<div style="padding-top: 4px; min-height: 60px;">';
    $html[] = "<a href='/how-to-videos/{$code}' title='{$title}'>{$title}</a>";
    //$html[] = "<br/><a href='/how-to-video/{$video->ref}'>{$code}</a>";
    $html[] = '</div>';
    $html[] = '</div>';

    $i++;
    if ($i > $show) {
      break;
    }

  }
  return implode("\n", $html);
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
    $html .= "<a title='{$title}' href='/how-to-videos/{$code}'>{$title}</a>";
    //$html .= "<br/><a href='/how-to-videos/{$video->ref}'>{$code}</a><br/><br/>";
    $html .= "<br/><br/>";

  }


  return $html;
}

function htv_menu($filters, $page, $current)
{
  $html = '';

  foreach ($filters as $filter) {

    $html .= '<h2>';

    if ($current[$filter->name]) {
      $html .= '</br>'
        . '<a class="reset-link processed" style="margin: 8px 10px 0px 10px;" href="' . '/' . $page . htv_stateless_filters($current, $filter->name, 'skip') . '">Clear all</a>';
    }

    $html .= '</h2>'
      . htv_menu_ul($filter->options, $filter->name, $current, $page);
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
      $html .= '<span>'
        . (anyChecked($filter->options, $name, $current) ? '&#9660;' : '&#9654;')
        . '</span> '
        . '<span class="menuHandle" style="color: rgb(0, 108, 133); font-size: 18px;"> '. $filter->label . '</span>';
    }

    // branch leafs
    if ($filter->options) {
      $html .= htv_menu_ul($filter->options, $name, $current, $page, $index + 1);
    }

    // leaf
    if ($filter->name && !$filter->options) {

      $html .= ' <a style="color: rgb(88, 89, 91);" href="' . '/' . $page . htv_stateless_filters($current, $name, $filter->name) . '">'
      . (false !== $checked ? '&#9745;' : '&#9744;')
      . ' ' . $filter->label
      . '</a>';
    }

    // disabled leaf
    if (!$filter->name && !$filter->options) {
      $html .= "<span style='color: silver;'>&#9744; {$filter->label}</span> ";
    }

    $html .= '</li>';
  }

  $html = '<ul style="' . ($index > 0 && false === $anyChecked ? 'display: none;': '') . '  list-style: none ;padding-left: ' . ($index * 16) . 'px">'
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