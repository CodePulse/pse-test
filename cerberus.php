<?php

$patterns = [
  '/^\/resource-centre$/',
  '/^\/password\/reset\/\d*\/[a-zA-Z0-9]*$/',
  '/^\/how-to-videos/'
];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  foreach($patterns as $pattern) {
    if (preg_match($pattern, $_SERVER['REQUEST_URI'])) {
      header('Location: ' . getenv('LARAVEL') . $_SERVER['REQUEST_URI']);
      exit;
    }
  }
}
