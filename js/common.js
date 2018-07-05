$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
            this.CustomJS();
        },

        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    $('html,body').animate({
                        scrollTop: p.top - $('#header').outerHeight() - 10
                    }, 600);
                }
                return false;
            });
            $(window).load(function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    $root.animate({
                        crollTop: top01 - $('#header').outerHeight() - 10
                    }, 600);
                }
            });

        },

        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                } else {
                    $('#totop').fadeOut();
                }
            });
        },

        Gnavi: function () {
            $('.menu-icon').click(function(){
                $(this).toggleClass('active');
                $('.header-r').stop().fadeToggle();
            });
            $(window).bind('load resize', function(){
                var wW = $(this).width();
                if(wW > 640){
                   $('.menu-icon').removeClass('active');
                   $('.header-r').removeAttr('style');
                }
            });
            $(window).scroll(function () {
                if ($(this).scrollTop() > 0) {
                    $('#header').addClass('fixed');
                } else {
                    $('#header').removeClass('fixed');
                }
            });
        },

        CustomJS: function () {
            $('.js-click').click(function () {
                window.location = $(this).find('a').attr('href');
                return false;
            });
        }


    };

    obj.init();

});
