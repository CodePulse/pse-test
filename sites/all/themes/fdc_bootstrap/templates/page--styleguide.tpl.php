<body>
  <div class="pse pse-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12 pse-user-menu">
          <div class="hidden-xs">
            <div class="header_search gsc-search-box pull-right">
              <div id="multiple-datasets" class="gsc-input">
                <form action="/search/results">
                  <input id="search_input" name="search_input" class="typeahead gsc-input" type="text" placeholder="Search">
                  <input value="" type="submit" class="btn btn-primary btn-search"/>
                </form>
              </div>
              <div id ="search_results"></div>
            </div>
            <?php print render($page['user_menu_region']); ?>
          </div>
        </div>
        </div>
      <div class="row">
        <div class="col-md-12 pse-nav-bar">
          <div class="pse-main-nav__logo">
            <a href=""><img src="<?php print '/' . drupal_get_path('theme', 'fdc_bootstrap') . '/logo.svg'?>" class="pse__logo"/></a>
          </div>
          <nav class="pse-main-nav__main-menu">
            <?php print render($page['main_menu_region']); ?>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="pse-main-content">
            <div class="pse-homepage--carousel">
              <div class="owl-carousel owl-theme">
                <a href="/"><div class="pse-homepage--carousel--slide" style="background-image: url('https://picsum.photos/1500/457');"></div></a>
                <a href="/"><div class="pse-homepage--carousel--slide" style="background-image: url('https://picsum.photos/1500/458');"></div></a>
                <a href="/"><div class="pse-homepage--carousel--slide" style="background-image: url('https://picsum.photos/1500/459');"></div></a></div>
            </div>
          <?php print render($page['content']); ?>
        </div>
      </div>
      </div>
    </div>
  </div>
</body>