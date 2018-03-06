<?php

$feedback = array(
  'ref' => $_POST['ref'],
  'source' => 'vimeo',
  'feedback' => array(
    'body' => $_POST['body'],
    'user' => array(
      'email' => $user->mail,
      'name' => $full_user->field_profile_first_name['und'][0]['safe_value'] . ' ' . $full_user->field_profile_last_name['und'][0]['safe_value'],
      'job title' => $full_user->field_profile_position['und'][0]['safe_value'],
      'company' => $full_user->field_profile_company['und'][0]['safe_value']
    )
  )
);
$client->addFeedback($feedback);
