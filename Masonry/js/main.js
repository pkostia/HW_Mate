$(document).ready(function($) {
	$('.masonry-container').masonry({
	  // options
	  itemSelector: '.item',
	  columnWidth: '.item',
	  gutter: 10,
	  fitWidth: true
	});
});