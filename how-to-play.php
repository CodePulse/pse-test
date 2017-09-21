<?php

// parameters
list($page, $ref) = explode('/', $_GET['q']);

// data
$response = json_decode(file_get_contents(
  'https://vimeo.psenterprise.com/api/videos'
  . '?code=' . $ref . '%'
));
$video = $response->videos[0];



?>

    <div class="main-container">
        <header id="page-header" role="banner"></header><!-- /#page-header -->
        <div class="row">
            <section class="col-sm-12 node-view-mode-full node-type-customer_area_page">
                <div id="trail">
                    <ul id="breadcrumbs">
                        <li><a href="/">PSE</a></li>
                        <li><a href="/customer-area">>&nbsp;customer area</a></li>
                        <li><a href="/how-to-videos">&gt;&nbsp;how-to videos</a></li>
                    </ul>
                </div>
                <a id="main-content"></a> <!-- <h1 class="page-header">How-to Videos</h1> -->
                <!-- CUSTOM TEMPLATES -->
                <!-- file sites/all/themes/fdc_bootstrap/templates/custom/customer_area_page.php -->

                <div class="row equal_children_height">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">

                        <section class="content">


                          <?php
                          list($code, $title) = explode(' ', $video->name, 2);
                          $body = htv_embed_video($video->ref, 1);

                          echo "
                            <div class='row'>
                                <div class='col-md-12'>
                                    {$body}
                                    <h2>{$title}</h2>
                                    <p>{$video->description}</p>
                                     <p>{$code}</p>
                                </div>
                            </div>
                          ";

                          ?>

                        </section>
                    </div>
                    <aside class="col-xs-12 col-sm-3 col-md-3 col-lg-3 pull-right" id="sidebarnobg" >
                      <?php
                          $response = json_decode(file_get_contents(
                            'https://vimeo.psenterprise.com/api/videos'
                            . '?albums[]=4377223'
                            . ($video->topics ? '&topics[]=' . implode('&topics[]=', $video->topics) : '')
                          ), true );
                          $videos = $response['videos'];
                      ?>

                      <?php


                      ?>
                        <?php



                        function findDescription($data, $needle) {
                            if(isset($data['name']) && $data['name'] === $needle) {
                                return [
                                    'description' => isset($data['description']) ?: false,
                                    'label' => $data['label']
                                ];
                            }

                            foreach($data['options'] as $option) {
                                $found = findDescription($option, $needle);
                                if($found) {
                                    return $found;
                                }

                            }

                           return false;
                        }

                        $category = findDescription($response['filters'][0], array_shift(explode('-', $code)));

                        ?>

                        <?php if ($category) { ?>
                            <h3><?php echo $category['label']; ?></h3>
                            <?php if($category['description']) { ?>
                                <p>
                                  <?php echo $category['description']; ?>
                                </p>
                            <?php } ?>

                        <?php } ?>
                        <h3>Related videos</h3>
                        <div style="overflow-x: hidden;">

                            <?php
                            foreach ($videos as $_video) {
                              if ($video->ref === $_video['ref']) { continue; }
                              list($code, $title) = explode(' ', $_video['name'], 2);
                              echo htv_embed_video($_video['ref']);
                              ?>
                              <a href='/how-to-videos/<?php echo $code; ?>'><?php echo $title; ?></a>
                              <br/><br/>
                            <?php } ?>
                        </div>

                        <!-- custom menu -->
                        <!-- News content -->
                        <!-- related content -->
                        <!-- testimonials -->
                        <!-- side content -->
                        <!-- publication -->
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


