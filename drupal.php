<?php

// bootstrap drupal
define('DRUPAL_ROOT', '/var/www/website');
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_SESSION);

$data = array(
  'user' => array(
    'roles' => $user->roles
  )
);

header('Content-Type: application/json');
echo json_encode($data);
