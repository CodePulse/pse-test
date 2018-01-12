<?php

/**
 * Given I am on Drupal based page
 * When I click on link [GET]
 * And it is not homepage
 * Then I am taken to Laravel based page if exists
 */

$url = getenv('LARAVEL') . $_SERVER['REQUEST_URI'];
$headers = @get_headers($url);
$isGet = $_SERVER['REQUEST_METHOD'] === 'GET';
$isHomepage = $_SERVER['REQUEST_URI'] === '/';

if($isGet && !$isHomepage && $headers !== false) {
  header('Location: ' . $url);
  exit();
}
