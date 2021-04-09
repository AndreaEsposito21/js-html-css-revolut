//
$(document).ready(function() {
    $('.li-dropdown').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });

    $('.li-dropdown').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    });
});