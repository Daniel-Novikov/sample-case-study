$( document ).ready(function() {
    new WOW().init();
    
    var fadeUntil = 700,
        speed = 2.5,
        offset = 0,
        opacity = 1,
        $headerBg = $('#header-bg'),
        $headerContent = $('#header-content');


    $(document).scroll(function() {
        offset = $(this).scrollTop();
        opacity =  1 - offset / fadeUntil;
        $headerContent.css('transform', 'translateY(' + offset / 2 + 'px)').css('opacity', opacity);
        $headerBg.css('transform', 'translateY(' +  offset / 1.5 + 'px)');
    });

});
