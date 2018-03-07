<?php
/**
 * @file
 * pse_contexts.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function pse_contexts_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'events-listing-main';
  $context->description = 'Events listing main page';
  $context->tag = 'pse events';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'pse_events:page' => 'pse_events:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-1' => array(
          'module' => 'block',
          'delta' => '1',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
        'block-4' => array(
          'module' => 'block',
          'delta' => '4',
          'region' => 'sidebar_second',
          'weight' => '-8',
        ),
        'facetapi-Dl4x1g5xLq5hvAPaZSsqMuwJ40a1PpP6' => array(
          'module' => 'facetapi',
          'delta' => 'Dl4x1g5xLq5hvAPaZSsqMuwJ40a1PpP6',
          'region' => 'sidebar_second',
          'weight' => '-7',
        ),
        'facetapi-vXW116fTZPZEZzuo7nKQFl3IVF3RoHB8' => array(
          'module' => 'facetapi',
          'delta' => 'vXW116fTZPZEZzuo7nKQFl3IVF3RoHB8',
          'region' => 'sidebar_second',
          'weight' => '-6',
        ),
        'facetapi-qCBENPr8wbZYDww1roJNQ4N1GnKrAFQ1' => array(
          'module' => 'facetapi',
          'delta' => 'qCBENPr8wbZYDww1roJNQ4N1GnKrAFQ1',
          'region' => 'sidebar_second',
          'weight' => '-5',
        ),
        'facetapi-psf3TPvLs9R1DaIbi9IIrkJz9AApNCEi' => array(
          'module' => 'facetapi',
          'delta' => 'psf3TPvLs9R1DaIbi9IIrkJz9AApNCEi',
          'region' => 'sidebar_second',
          'weight' => '-4',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Events listing main page');
  t('pse events');
  $export['events-listing-main'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'news-listing';
  $context->description = '';
  $context->tag = 'pse news';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'pse_news:page' => 'pse_news:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-4' => array(
          'module' => 'block',
          'delta' => '4',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
        'facetapi-vXW116fTZPZEZzuo7nKQFl3IVF3RoHB8' => array(
          'module' => 'facetapi',
          'delta' => 'vXW116fTZPZEZzuo7nKQFl3IVF3RoHB8',
          'region' => 'sidebar_second',
          'weight' => '-8',
        ),
        'facetapi-qCBENPr8wbZYDww1roJNQ4N1GnKrAFQ1' => array(
          'module' => 'facetapi',
          'delta' => 'qCBENPr8wbZYDww1roJNQ4N1GnKrAFQ1',
          'region' => 'sidebar_second',
          'weight' => '-7',
        ),
        'facetapi-psf3TPvLs9R1DaIbi9IIrkJz9AApNCEi' => array(
          'module' => 'facetapi',
          'delta' => 'psf3TPvLs9R1DaIbi9IIrkJz9AApNCEi',
          'region' => 'sidebar_second',
          'weight' => '-6',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('pse news');
  $export['news-listing'] = $context;

  return $export;
}
