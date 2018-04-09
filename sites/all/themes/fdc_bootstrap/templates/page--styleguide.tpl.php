<body>
  <div class="pse pse-wrapper">
    <div class="container">
      <div class="pse-nav-bar">
        <div class="pse-main-nav__logo">
<!--          <a href=""><img src="--><?php //print '/' . drupal_get_path('theme', 'fdc_bootstrap') . '/logo.svg'?><!--" class="pse__logo"/></a>-->
        </div>
        <nav class="pse-main-nav__main-menu">
          <?php print render($page['main_menu_region']); ?>
        </nav>
        <div class="pse-main-nav__personalised-menu">
          <?php print l(t('Sign in'), 'user/login'); ?>
        </div>
      </div>
<!--      --><?php //print render($page['content']); ?>
    </div>
  </div>
</body>