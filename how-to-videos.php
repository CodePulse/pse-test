<?php

// bootstrap drupal
define('DRUPAL_ROOT', getcwd());
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

// check user permissions
$page = array(5, 37, 38, 39, 40, 41);
$roles = array_keys($user->roles);

$check = array_intersect($roles, $page);
if (!$check) {
  header( 'Location: /user?destination=' . $_SERVER[REQUEST_URI]);
  die;
}

$full_user = user_load($user->uid);
$field_profile_name = $full_user->field_profile_first_name['und'][0]['safe_value'] . ' ' . $full_user->field_profile_last_name['und'][0]['safe_value'];
$field_profile_company = $full_user->field_profile_company['und'][0]['safe_value'];
$field_profile_position = $full_user->field_profile_position['und'][0]['safe_value'];

// check if video exists
list($page, $code) = explode('/', $_GET['q']);

require_once DRUPAL_ROOT . '/how-to-lib.php';
$client = new PSEVimeoClient(getenv('DRUPAL_PSE_VIMEO_SERVICES'));
$full_user = user_load($user->uid);

if($code === 'feedback') {
  require_once DRUPAL_ROOT . '/how-to-feedback.php';
  die;
}

$response = htv_api_get('?code=' . $code);
$video = $response->videos[0];

require DRUPAL_ROOT . '/how-to-top.php';

if ($code && $video) {
  require_once DRUPAL_ROOT . '/how-to-play.php';
} else {
  require_once DRUPAL_ROOT . '/how-to-home.php';
}

require DRUPAL_ROOT . '/how-to-bottom.php';
