$(document).ready(function() {
  $('.menu-link').click(function(e) {
    e.preventDefault();
    $('.mobile-menu').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  });
});
