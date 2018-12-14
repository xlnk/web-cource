"use strict";

$(function () {

    // var top = cart.top();
    console.log($("#cart").offset());
    $(".item > img").click(function () {
        // console.log($(this).offset());
        // console.log();
        var pos = $(this).position();
        var cartPos = $("#cart").position();
        console.log(pos);
        // $(this).parent().addClass("animated");
        var src = $(this).attr('src');
        var img = $("<img style='position: absolute; left: " + Math.round(pos.left) + "px; top: " + Math.round(pos.top) + "px;' src='" + src + "'>");
        img.appendTo($("body"));
        img.animate({left: cartPos.left, top: cartPos.top}, 2000, function () {
            img.remove();
        });
    })
});
