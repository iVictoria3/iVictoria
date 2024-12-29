$(document).ready(function() {
  $('.carousel').carousel({
    interval: false, // Disable automatic slide transition
  });

  $('.carousel-control-prev, .carousel-control-next').click(function() {
    var currentItem = $('.carousel-item.active');
    var nextItem = $(this).data('slide') === 'next' ? currentItem.next() : currentItem.prev();

    // Add custom animation for the transition
    currentItem.addClass('slide-out');
    nextItem.addClass('slide-in');

    setTimeout(function() {
      currentItem.removeClass('active slide-out');
      nextItem.addClass('active');
      nextItem.removeClass('slide-in');
    }, 500); // Adjust transition duration as needed
  });
});