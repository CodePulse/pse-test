<?php
if (function_exists('fdc_pse_get_events_home')) {
	$latest_events = fdc_pse_get_events_home();
}
?>
<?php if (!empty($latest_events)): ?>
	<article>
		<header>
			<h2>Events</h2>
			<ul class="row diary">
				<?php foreach ($latest_events as $evnts) : ?>
					<?php if (!empty($evnts->page_ref) || !empty($evnts->external_link) || !empty($evnts->no_link)): ?>
						<?php if (!empty($evnts->page_ref)): ?>
							<?php $url = url('node/' . $evnts->page_ref); ?>
						<?php endif; ?>

						<?php if (!empty($evnts->external_link)): ?>
							<?php $url = $evnts->external_link; ?>
						<?php endif; ?>
						<?php if (!empty($evnts->no_link)): ?>
							<?php $url = ''; ?>
						<?php endif; ?>
					<?php else: ?>
						<?php $url = url('node/' . $evnts->nid); ?>
					<?php endif; ?>


					<li class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<?php if(!empty($evnts->page_ref)): ?>
							<?php $url = url('node/' . $evnts->page_ref); ?>
						<?php else: ?>
							<?php $url = url($evnts->external_link); ?>
						<?php endif; ?>

						<?php if (!empty($url)): ?>
						<!-- <a href="<?php //echo url('node/' . $evnts->nid); ?>"> -->
						<a href="<?php echo $url ?>">
							<?php else : ?>
							<span>
						<?php endif; ?>
								<?php echo mb_strimwidth($evnts->title, 0, 40, "...") . '<br>'; ?>
								<?php print $evnts->location . '<br>'; ?>
								<?php if ($evnts->start_date == $evnts->end_date || $evnts->start_date > $evnts->end_date): ?>
									<?php echo date('d F Y', $evnts->start_date) . '<br>'; ?>
								<?php else: ?>
									<?php echo date('d', $evnts->start_date); ?> -
									<?php echo date('d F Y', $evnts->end_date) . '<br>'; ?>
								<?php endif; ?>
								<?php if (!empty($url)): ?>
						</a>
					<?php else : ?>
						</span>
					<?php endif; ?>

					</li>
				<?php endforeach; ?>
		</header>
		<footer>
			<a href="/events" class="more-news more-content-arrow">more events</a>
		</footer>
	</article>
<?php endif; ?>