<?php

// bootstrap drupal
define('DRUPAL_ROOT', '/var/www/website');
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);
$full_user = user_load($user->uid);

$data = array(
  'user' => array(
    'first_name' => $full_user->field_profile_first_name['und'][0]['safe_value'],
    'last_name' => $full_user->field_profile_last_name['und'][0]['safe_value'],
    'email' => $full_user->mail,
    'roles' => $user->roles,
    'company_name' => $full_user->field_profile_company['und'][0]['safe_value'],
    'position' => $full_user->field_profile_position['und'][0]['safe_value']
  )
);

header('Content-Type: application/json');
echo json_encode($data);
