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
                        <li><a href="/how-to-videos">> how-to videos</a></li>
                    </ul>
                </div>
                <a id="main-content"></a> <!-- <h1 class="page-header">How-to Videos</h1> -->
                <!-- CUSTOM TEMPLATES -->
                <!-- file sites/all/themes/fdc_bootstrap/templates/custom/customer_area_page.php -->

                <div class="row equal_children_height">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">

                        <section class="content">
                            <br/>

                          <?php
                          list($code, $title) = explode(' ', $video->name, 2);
                          $body = htv_embed_video($video->ref, 1);

                          echo "
                            <div class='row'>
                                <div class='col-md-12'>
                                    {$body}
                                    <h2>{$title}</h2>
                                    <p>{$video->description}</p>
                                    <p style='font-size: 12px;'>{$code}</p>
                                </div>
                            </div>
                          ";

                          ?>

                         <div class="row">
                             <div class="col-md-12">
                                 <h3>Feedback</h3>

                                 <div id="vfForm">
                                     <p>We love feedback feedback feedback!</p>
                                     <textarea id="vfComments" style="width: 100%; height: 100px;"></textarea>
                                     <span class="linkbuttonprimary"><a id="vfBtn" href="">Submit</a></span>

                                 </div>

                                 <script>
                                     $(function () {
                                         $('#vfBtn').click( function() {

                                             $.post( "<?php echo getenv('DRUPAL_PSE_VIMEO_SERVICES'); ?>/api/videos/feedback", { "source" : "vimeo", "ref" : "228967538", "feedback": { "body" : $('#vfComments').val(), "user" : { "email": "<?php echo $user->mail; ?>"}}}, function() {
                                                 $( "#vfForm").html( 'Thank you for your feedback!');
                                             });
                                             return false;
                                         });
                                     });
                                 </script>
                             </div>
                         </div>


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

                        function findDescription($data, $needle) {
                            if(isset($data['name']) && $data['name'] === $needle) {
                                return [
                                    'description' => isset($data['description']) ? $data['description'] : false,
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

                        <h2 class="heading-filter-by">Related videos</h2>
                        <div style="overflow-x: hidden;">

                            <?php
                            foreach ($videos as $_video) {
                              if ($video->ref === $_video['ref']) { continue; }
                              list($code, $title) = explode(' ', $_video['name'], 2);
                              ?>

                              <a href='/how-to-videos/<?php echo $code; ?>'>
                                <?php echo htv_video_thumbnail($_video['pictures']); ?>
                                <?php echo $title; ?>
                              </a>
                              <br/><br/>
                            <?php } ?>
                        </div>


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


