$(".fancybox")
    .attr('rel', 'works')
    .fancybox({
        beforeShow: function () {
            /* Disable right click */
            $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false; 
            });
        }
    });