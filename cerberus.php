<?php

$migrated = [
  '/resource-centre'
];

if ($_SERVER['REQUEST_METHOD'] === 'GET' && in_array($_SERVER['REQUEST_URI'], $migrated, true)) {
  header('Location: ' . getenv('LARAVEL') . $_SERVER['REQUEST_URI']);
  exit();
}
