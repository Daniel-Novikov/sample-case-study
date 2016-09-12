// Function for number increment effect
(function($) {
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
            commas = (commas === undefined) ? true : commas;
            $({
                value: start
            }).animate({
                value: stop
            }, {
                duration: duration == undefined ? 1000 : duration,
                easing: ease == undefined ? "swing" : ease,
                step: function() {
                    $this.text(Math.floor(this.value));
                    if (commas) {
                        $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }
                },
                complete: function() {
                    if (parseInt($this.text()) !== stop) {
                        $this.text(stop);
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    }
                }
            });
        });
    };
})(jQuery);


$(document).ready(function() {
    // Init wow animation
    new WOW().init();

    // Declare vars
    var fadeUntil = 700,
        speed = 2.5,
        offset = 0,
        opacity = 1,
        $headerBg = $('#header-bg'),
        $headerContent = $('#header-content'),
        $dividerAlp = $('#divider-alp'),
        $count = $('#count'),
        $countNum = 17240;

    // Adding moving header on scrolling
    $(document).scroll(function() {
        offset = $(this).scrollTop();
        opacity = 1 - offset / fadeUntil;
        $headerContent.css('transform', 'translateY(' + offset / 2 + 'px)').css('opacity', opacity);
        $headerBg.css('transform', 'translateY(' + offset / 1.5 + 'px)'),
            $dividerAlp.css('height', offset / 2 + 'px)');
    });


    // Check if the element is visible
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Counter on the bottom
    $count.text('0');

    $(document).scroll(function() {
        if(isScrolledIntoView($count)){
            $count.animateNumbers($countNum, true, 1000, 'swing');
        }
    });

});
