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
        <div id="pse-main-menu" class="col-md-12 pse-nav-bar">
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
                <a href="/"><div class="pse-homepage--carousel--slide" style="background-image: url('https://picsum.photos/1500/459');"></div></a>
              </div>
            </div>
          <div class="row padding-top">
            <div class="col-xs-12 col-md-8">
              <div class="pse-homepage-sub-text">
                <p><?php print t('Our products and services help process organisations explore the decision space rapidly and effectively, and make better, faster and safer design and operation decisions.'); ?></p>
                <p class="primary-read-more-cta"><?php print l(t('More about PSE'), '/more'); ?></p>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="pse-quote">
                <p class="quote-body"><?php print t('We improved process economics by tens of millions of £/year'); ?></p>
                <p class="quote-author"><?php print t('Integrated global energy company repsol'); ?></p>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="pse-island">
                <div class="pse-island--image" style="background-image: url('https://picsum.photos/370/273');"></div>
                <p class="pse-island--title"><?php print t('gPROMS ProcessBuilder 1.2'); ?></p>
                <p class="pse-island--description"><?php print t('Hear why leading companies sucha as Procter & Gamble and Nestle have turned to Advanced Process Modelling'); ?></p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="pse-island">
                <div class="pse-island--image" style="background-image: url('https://picsum.photos/370/272');"></div>
                <p class="pse-island--title"><?php print t('gPROMS pROCESS 1.2'); ?></p>
                <p class="pse-island--description"><?php print t('Companies sucha as Procter & Gamble and Nestle have turned to Advanced Process Modelling'); ?></p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="pse-island">
                <div class="pse-island--image" style="background-image: url('https://picsum.photos/370/271');"></div>
                <p class="pse-island--title"><?php print t('Never ProcessBuilder 1.2'); ?></p>
                <p class="pse-island--description"><?php print t('Procter & Gamble and Nestle have turned to Advanced Process Modelling'); ?></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="page-section">
              <div class="col-xs-12 col-sm-6">
                <p class="section-title"><?php print t('News'); ?></p>
                <div class="row">
                  <div class="col-xs-12">
                    <div class="section-item">
                      <div class="section-item--image--wrapper">
                        <div class="section-item--image" style="background-image: url('https://picsum.photos/100/104');"></div>
                      </div>
                      <div class="section-item--body">
                        <p class="section-item--title"><?php print t('PSE and RCPE announce pharma centre of excellence'); ?></p>
                        <p class="section-item--date-location"><?php print t('14 May 2018, London'); ?> <i class="fas fa-long-arrow-alt-right section-item--cta"></i></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="section-item">
                      <div class="section-item--image--wrapper">
                        <div class="section-item--image" style="background-image: url('https://picsum.photos/100/113');"></div>
                      </div>
                      <div class="section-item--body">
                        <p class="section-item--title"><?php print t('PSE and RCPE announce pharma centre of excellence'); ?></p>
                        <p class="section-item--date-location"><?php print t('14 May 2018, London'); ?> <a href="#"><i class="fas fa-long-arrow-alt-right section-item--cta"></i></a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="section-item">
                      <div class="section-item--image--wrapper">
                        <div class="section-item--image" style="background-image: url('https://picsum.photos/100/104');"></div>
                      </div>
                      <div class="section-item--body">
                        <p class="section-item--title"><?php print t('PSE and RCPE announce pharma centre of excellence'); ?></p>
                        <p class="section-item--date-location"><?php print t('14 May 2018, London'); ?> <i class="fas fa-long-arrow-alt-right section-item--cta"></i></p>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="read-more-cta"><?php print l(t('More news'), '/news'); ?></p>
              </div>
            </div>
            <div class="page-section">
              <div class="col-xs-12 col-sm-6">
              <p class="section-title"><?php print t('Events'); ?></p>
              <div class="row">
                <div class="col-xs-12">
                  <div class="section-item">
                    <div class="section-item--image--wrapper">
                      <div class="section-item--image" style="background-image: url('https://picsum.photos/100/109');"></div>
                    </div>
                    <div class="section-item--body">
                      <p class="section-item--title section-item--events-type"><?php print t('PSE Webinar:'); ?></p>
                      <p class="section-item--events-title"><?php print t('PSE and RCPE announce pharma centre of excellence:'); ?></p>
                      <p class="section-item--date-location"><?php print t('14 May 2018, London'); ?> <i class="fas fa-long-arrow-alt-right section-item--cta"></i></p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12">
                  <div class="section-item">
                    <div class="section-item--image--wrapper">
                      <div class="section-item--image" style="background-image: url('https://picsum.photos/100/109');"></div>
                    </div>
                    <div class="section-item--body">
                      <p class="section-item--title section-item--events-type"><?php print t('PSE Webinar:'); ?></p>
                      <p class="section-item--events-title"><?php print t('PSE Webinar:'); ?></p>
                      <p class="section-item--date-location"><?php print t('14 May 2018, London'); ?> <i class="fas fa-long-arrow-alt-right section-item--cta"></i></p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12">
                  <div class="section-item">
                    <div class="section-item--image--wrapper">
                      <div class="section-item--image" style="background-image: url('https://picsum.photos/100/109');"></div>
                    </div>
                    <div class="section-item--body">
                      <p class="section-item--title section-item--events-type"><?php print t('PSE Webinar:'); ?></p>
                      <p class="section-item--events-title"><?php print t('PSE Webinar:'); ?></p>
                      <p class="section-item--date-location"><?php print t('14 May 2018, London'); ?> <i class="fas fa-long-arrow-alt-right section-item--cta"></i></p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="read-more-cta"><?php print l(t('More events'), '/events'); ?></p>
            </div>
            </div>
          </div>
          <?php print render($page['content']); ?>
        </div>
      </div>
      </div>
    </div>
  <footer>
    <div class="container">
      <div class="row">
        <div class="pse-footer-menu">
          <?php print render($page['footer_menu_region']); ?>
          <div class="pse-copyright">
            <?php print t('&copy; Copyright Process System Enterprise Limited ') . date('Y'); ?>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>