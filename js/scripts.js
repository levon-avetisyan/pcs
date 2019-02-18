(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    $("input[name='amount']").on('change', function () {
        $('input:radio[name=' + $(this).attr('name') + ']').parent().parent().removeClass('active');
        $(this).parent().parent().addClass('active');
    });

    $("#freqOptionOnce").on('click', function () {
        $("#oneTimeDonation").prop("checked", true);
        $("#freqOptionRecurring").removeClass('active');
        $(this).addClass('active');
    });

    $(".floating-label").on("click", function () {
        $(this).next("input.pcs-input").focus();
    });

    $("#freqOptionRecurring").on('click', function () {
        $("#recurringDonation").prop("checked", true);
        $("#freqOptionOnce").removeClass('active');
        $(this).addClass('active');
    });

    //Label on Focus
    $(".pcs-input").focus(function () {
        $(this).parent().addClass("focused");
    }).blur(function () {
        $(this).parent().removeClass("focused");
    });
});

},{}]},{},[1]);
