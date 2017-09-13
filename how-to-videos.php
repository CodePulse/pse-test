<?php require 'how-to-top.php'; ?>

    <div class="main-container">
        <header id="page-header" role="banner"></header><!-- /#page-header -->
        <div class="row">
            <section class="col-sm-12 node-view-mode-full node-type-customer_area_page">

                <a id="main-content"></a> <!-- <h1 class="page-header">How-to Videos</h1> -->
                <!-- CUSTOM TEMPLATES -->
                <!-- file sites/all/themes/fdc_bootstrap/templates/custom/customer_area_page.php -->
                <div class="row row_extra_negative">
                    <div class="home_banners">
                        <div>
                            <div class="slick-slide-panel"
                                 style="background-image: url(/sites/default/files/styles/home_page_banner_large/public/mediafiles/fields/background_image/1168_400_bgonly.png?itok=BMuOHY84)">
                                <div class="pad">
                                    <h1 style=" color:#fff">How-to Videos</h1>
                                    <h3 style=" color:#fff">Short videos on specific topics to help you use gPROMS
                                        family products efficiently</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row equal_children_height">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">

                        <section class="content">
                          <?php

                          // parameters
                          $topic = $level = FALSE;
                          $q = explode('/', $_GET['q']);
                          $page = $q[0];
                          foreach ($q as $k => $i) {
                            if ($i === 'topic') {
                              $topic = $q[$k + 1];
                            }
                            if ($i === 'level') {
                              $level = $q[$k + 1];
                            }
                          }

                          // data
                          $response = json_decode(file_get_contents(
                            'https://vimeo.psenterprise.com/api/videos'
                            . '?albums[]=4377223'
                            . ($topic ? '&topics[]=' . $topic : '')
                            . ($level ? '&levels[]=' . $level : '')
                          ));
                          $videos = $response->videos;
                          $filters = $response->filters;

                          // helpers
                          function htvFilters($data, $skip) {
                            $filters = '';
                            unset($data[$skip]);
                            $data = array_filter($data);
                            foreach ($data as $k => $v) {
                              $filters .= "/$k/$v";
                            }
                            return $filters;
                          }

                          ?>

                            <div class="row">
                                <div class="col-md-12">
                                    <h1>
                                        How-to videos
                                    </h1>
                                </div>

                              <?php foreach ($videos as $video) { ?>
                                  <div class="col-md-6">
                                    <?php require 'how-to-embeded-video.php'; ?>

                                      <a href="/how-to-video/<?php echo $video->ref; ?>">
                                        <?php echo $video->name; ?>

                                      </a>
                                      <br/>
                                      <br/>
                                  </div>
                              <?php } ?>
                            </div>
                        </section>
                    </div>
                    <aside class="col-xs-12 col-sm-3 col-md-3 col-lg-3 pull-right" id="sidebarnobg">
                      <?php foreach ($filters as $filter) { ?>
                          <h2><?php echo $filter->label; ?></h2>
                          <ul class="list">
                              <li>
                                <?php
                                $uri = '/' . $page
                                  . htvFilters(['topic' => $topic, 'level' => $level], $filter->name);
                                ?>
                                  <a href="<?php echo $uri; ?>">
                                      All
                                  </a>
                              </li>
                            <?php foreach ($filter->options as $key => $label) { ?>
                                <li>
                                  <?php
                                  $uri = '/' . $page
                                    . htvFilters(['topic' => $topic, 'level' => $level], $filter->name)
                                    . '/' . $filter->name . '/' . $key;
                                  ?>
                                    <a href="<?php echo $uri; ?>">
                                      <?php echo $label; ?>
                                    </a>
                                </li>
                            <?php } ?>
                          </ul>
                      <?php } ?>

                        <script>
                            $(function () {
                                $('#user_not_registered_modal').on('show.bs.modal', function (event) {
                                    var button = $(event.relatedTarget); // Button that triggered the modal
                                    var fname = button.data('file'); // Extract info from data-* attributes
                                    var pub_file_name = fname.substring(fname.lastIndexOf("tdf/") + 4, fname.lastIndexOf("?file"));

                                    $("input:hidden[name='submitted[file_id]']").val(fname);
                                    $("input:hidden[name='submitted[current_page]']").val(window.location.href);
                                    $("input:hidden[name='submitted[file_name]']").val(pub_file_name);
                                })
                            })
                        </script>
                    </aside>
                </div><!-- end of file sites/all/themes/fdc_bootstrap/templates/custom/customer_area_page.php -->
                <!-- END CUSTOM TEMPLATES -->
            </section>
        </div><!-- /.row with content and sidebars -->
    </div>

<?php require 'how-to-bottom.php'; ?>