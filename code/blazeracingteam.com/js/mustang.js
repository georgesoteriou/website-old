(function($) {
		  
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
        "use strict";
		
        // screen loader
        $('.screen-loader').fadeOut('slow');
	
    });
    // WINDOW.LOAD FUNCTION end
	
	
    // DOCUMENT.READY FUNCTION start
    $(document).ready(function() {
        "use strict";
		
        // preload
        $('#preload').css({
            display: 'table'
        });
		
        // preload.Timeout
        setTimeout(function() {
            $('#preload').delay(250).fadeOut(1500);
            $('#intro-wrapper').delay(1400).css({
                display: 'none'
            }).fadeIn(1000);
            $('#menu-wrapper').delay(1400).css({
                display: 'none'
            }).fadeIn(1000);
            $('#countdown-wrapper').delay(1400).css({
                display: 'none'
            }).fadeIn(1000);
        });

		var video = $('#video-bg').data('vide');

        // kenburnsy
        $("#kenburnsy-bg").kenburnsy({
            fullscreen: true
        });
		
        // countdown setup start
        $("#countdown").countdown({
            date: "20 October 2030 12:00:00", // countdown target date settings
            format: "on"
        }, function() {
            // callback function
        });
		
        // fire
        // fire george
        $("#fire-george").on("click", function(e) {
            e.preventDefault();
            window.location.href='https://www.facebook.com/georgesot';
        });
        // fire home
        $("#fire-home").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $('#video-bg').vide('img/video.mp4');
                $("#home").fadeIn(2200);
                $(".current").removeClass("current");
                $("#home").addClass("current");
            });
        });
        // fire about
        $("#fire-about").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $('#video-bg').vide('img/video2.mp4');
                $("#about").fadeIn(2200);
                $(".current").removeClass("current");
                $("#about").addClass("current");
            });
        });
        // fire sponsors
        $("#fire-sponsors").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $('#video-bg').vide('img/who-help.JPG');
                $("#sponsors").fadeIn(2200);
                $(".current").removeClass("current");
                $("#sponsors").addClass("current");
            });
        });
        // fire help
        $("#fire-help").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $('#video-bg').vide('img/who-are.jpg');
                $("#help").fadeIn(2200);
                $(".current").removeClass("current");
                $("#help").addClass("current");
            });
        });
        // fire contact
        $("#fire-contact").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $('#video-bg').vide('img/touch.jpg');
                $("#contact").fadeIn(2200);
                $(".current").removeClass("current");
                $("#contact").addClass("current");
            });
        });
        // fire social
        $("#fire-social").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $('#video-bg').vide('img/video2.mp4');
                $("#social").fadeIn(2200);
                $(".current").removeClass("current");
                $("#social").addClass("current");
            });
        });
		
        // menu active state
        $('a.menu-state').on("click", function() {
            $('a.menu-state').removeClass("active");
            $(this).addClass("active");
        });
		
        // owlCarousel
        $(".sponsors-gallery-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
		
        // wordRotator
        $("#wordrotator").wordsrotator({
            autoLoop: true, // auto rotate words
            randomize: false, // show random entries from the words array
            stopOnHover: false, // stop animation on hover
            changeOnClick: false, // force animation run on click
            animationIn: "fadeInLeft", // css class for entrace animation
            animationOut: "fadeOutRight", // css class for exit animation
            speed: 4000, // delay in milliseconds between two words
            words: ['We Are<br><span class="highlighter">Blaze</span><br>Racing', 'Blaze<br><span class="highlighter">Race</span><br>Conquer']
                // Array of words, it may contain HTML values
        });
		
        // dialog
        (function() {
            var dlgtrigger = document.querySelector('[data-dialog]'),
                somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
                dlg = new DialogFx(somedialog);
            dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));
        })();
		
	
    });
    // DOCUMENT.READY FUNCTION end
	
	
    // MOBILE DETECT start
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // MOBILE DETECT end

})(jQuery);