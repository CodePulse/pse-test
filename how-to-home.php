
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
                                    <h1 style=" color:#fff">How-to-videos</h1>
                                    <h3 style=" color:#fff">Short videos on specific topics to help you use gPROMS
                                        family products efficiently</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row equal_children_height" id="reloadMe">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">

                        <section class="content">
                          <?php

                          // parameters
                          $topic = $level = FALSE;
                          $show = 6;
                          $q = explode('/', $_GET['q']);
                          $page = $q[0];
                          foreach ($q as $k => $i) {
                            if ($i === 'topic') {
                              $topic = $q[$k + 1];
                            }
                            if ($i === 'level') {
                              $level = $q[$k + 1];
                            }
                            if ($i === 'show') {
                              $show = $q[$k + 1];
                            }
                          }
                          $current = ['topic' => $topic, 'level' => $level];

                          // data

                          $response = htv_api_videos($topic, $level);

                          $videos = $response->videos;
                          $filters = $response->filters;

                          ?>

                            <div class="row">
                                <div class="col-md-12">
                                    <h1>
                                        All Videos
                                    </h1>
                                </div>
                            </div>
                            <div class="row">
                                <?php echo htv_videos($videos, $show); ?>
                          </div>

                          <?php
                            $total = count($videos);
                          ?>

                            <?php if($show < $total) { ?>
                            <div class="row">
                                <div class="col-md-12 views-align-center">
                                    <a class="asyncBtn" href="<?php echo '/' . $page . htv_stateless_filters($current, 'show') . '/show/' . ($show + 6) ; ?>">
                                        Show more
                                    </a>
                                </div>
                            </div>
                            <?php } ?>


                        </section>
                    </div>
                    <aside class="col-xs-12 col-sm-3 col-md-3 col-lg-3 pull-right videoFilters" id="sidebarnobg">

                        <div class="content">
                            <h2 class="heading-filter-by">Filter by</h2>
                        </div>
                        <?php echo htv_menu($filters, $page, $current); ?>

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

    <script>
        $(function () {

            $("div.main-container").on("click", "a.asyncBtn", function(){
                $("#reloadMe").load($(this).attr("href") + " #reloadMe");
                return false;
            });

            $("div.main-container").on("click", ".menuHandle", function(){

                var query = $(this).next();
                var isVisible = query.is(':visible');

                console.log(isVisible);

                if (isVisible  === true) {
                    $(this).prev().html('&#9654;');
                    query.hide();
                } else {
                    $(this).prev().html('&#9660;');
                    query.show();
                }
                return false;
            });




        });
    </script>

