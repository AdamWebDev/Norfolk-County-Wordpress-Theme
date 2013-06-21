<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="twelvecol first clearfix" role="main">

							<article id="post-<?php the_ID(); ?>" class="front-page" role="article">

								<section class="entry-content clearfix" itemprop="articleBody">
									
									<div class="fourcol first">
										<?php front_page_boxes('service_disruptions','Service Disruptions','NorfolkCountyServiceDisruptions'); ?>
									</div>
									
									<div class="fourcol">
										<?php front_page_boxes('public_notices','Public Notices','NorfolkCountyPublicNotices'); ?>
									</div>
									
									<div class="fourcol last">
										<?php front_page_boxes('media_releases','Media Releases','NorfolkCountyMediaReleases'); ?>
									</div>
									
									
							</section> <!-- end article section -->



							</article> <!-- end article -->


						</div> <!-- end #main -->

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>
