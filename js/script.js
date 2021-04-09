//
$(document).ready(function() {
    $('.li-dropdown').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
        $('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    });

    $('.li-dropdown').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
        $('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

});