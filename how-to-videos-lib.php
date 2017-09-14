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
function htv_menu($filters, $page, $topic, $level) {
  $html = [];

  $current = ['topic' => $topic, 'level' => $level];

  foreach ($filters as $filter) {
    $html[] = '<h2>' . $filter->label .'</h2>';
    $html[] = '<ul style="list-style: none;">';
    $html[] = '<li>';
    $html[] = '<a href="' . '/' . $page . htv_stateless_filters($current, $filter->name, 'skip') . '">Clear</a>';
    $html[] = '</li>';

    foreach ($filter->options as $key => $label) {
      $checked = strpos($current[$filter->name],  $key);
      $html[] = '<li>';
      $html[] = '<input type="checkbox" name="filter"' . (false !== $checked ? ' checked' : '') . '>';
      $html[] = '<a href="' . '/' . $page . htv_stateless_filters($current, $filter->name, $key) . '">';
      $html[] = $label;
      $html[] =  '</a>';
      $html[] = '</li>';
    }
    $html[] = '</ul>';
  }

  return implode("\n", $html);
}
