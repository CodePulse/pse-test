<?php

interface FeaturesBuilderInterface {

  /**
   * List Features type modules generated by this class.
   */
  static function listFeatures();

  /**
   * Declare the package in which this Feature belongs.
   */
  public function package();

}
