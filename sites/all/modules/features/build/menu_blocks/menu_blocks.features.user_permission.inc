<?php
/**
 * @file
 * menu_blocks.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function menu_blocks_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'administer superfish'.
  $permissions['administer superfish'] = array(
    'name' => 'administer superfish',
    'roles' => array(
      'Website developer' => 'Website developer',
    ),
    'module' => 'superfish',
  );

  return $permissions;
}
