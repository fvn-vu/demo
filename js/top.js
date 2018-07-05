$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.customTop();
        },

        customTop: function () {
            $(".box02-ctn").mCustomScrollbar();
        }
    };

    obj.init();

});
