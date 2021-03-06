(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {exports: {}};
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }

        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }

    return r
})()({
    1: [function (require, module, exports) {
        'use strict';

        $(document).ready(function () {

            $("input[name='orderid']").on('change', function () {
                $('input:radio[name=' + $(this).attr('name') + ']').parent().parent().removeClass('active');
                $(this).parent().parent().addClass('active');
            });

            $("input[name='orderid']").on('click', function () {
                $('#donationAmountInput').val($(this).attr('id')).on('focus', function () {
                    $("input[name='amount']").parent().parent().removeClass('active');
                });
                $("#amountOfCharge").text($(this).attr('id'))
            });

            $("input[name='amount']").on('blur', function () {
                $("#amountOfCharge").text($(this).val());
            });

            $("#periodSelect").on('change', function () {
                var value = $(this).val();
                var freqOptionsMonthly = {
                    '3 months': '3 Months',
                    '6 months': '6 Months',
                    '12 months': '12 Months',
                    '24 months': '24 Months',
                    '36 months': '36 Months',
                    '48 months': '48 Months',
                    '60 months': '60 Months',
                };
                var freqOptionsYearly = {
                    '1': '1',
                    '2': '2',
                    '3': '3',
                    '4': '4',
                    '5': '5',
                    '6': '6',
                    '7': '7',
                    '8': '8',
                    '9': '9',
                    '10': '10',
                };
                var freqOptionsWeekly = {
                    '1': '1',
                    '2': '2',
                    '3': '3',
                    '4': '4',
                    '5': '5',
                    '6': '6',
                    '7': '7',
                    '8': '8',
                    '9': '9',
                    '10': '10',
                };
                switch (value) {
                    case'':
                        $("#freqSelect").prop('disabled', true);
                        $("#freqSelect option").remove();
                        break;
                    case'Weekly':
                        $("#freqSelect").prop('disabled', false);
                        $("#freqSelect option").remove();
                        $.each(freqOptionsWeekly, function (index, value) {
                            $("#freqSelect").append($('<option>', {value: value, text: index}));
                        });
                        break;
                    case'Monthly':
                        $("#freqSelect").prop('disabled', false);
                        $("#freqSelect option").remove();
                        $.each(freqOptionsMonthly, function (index, value) {
                            $("#freqSelect").append($('<option>', {value: value, text: index}));
                        });
                        break;
                    case'Yearly':
                        $("#freqSelect").prop('disabled', false);
                        $("#freqSelect option").remove();
                        $.each(freqOptionsYearly, function (index, value) {
                            $("#freqSelect").append($('<option>', {value: value, text: index}));
                        });
                        break;
                    default:
                }
            });

            $("#freqOptionOnce").on('click', function () {
                $("#oneTimeDonation").prop("checked", true);
                $("#freqOptionRecurring").removeClass('active');
                $('#periodSelect').val($("#periodSelect option:first").val()).prop("disabled", true);
                $('#freqSelect').prop("disabled", true);
                $("#freqSelect option").remove();
                $(this).addClass('active');
            });

            $("#freqOptionRecurring").on('click', function () {
                $("#recurringDonation").prop("checked", true);
                $("#freqOptionOnce").removeClass('active');
                $('#periodSelect').prop("disabled", false);
                $(this).addClass('active');
            });

            $(".floating-label").on("click", function () {
                $(this).next("input.pcs-input").focus();
            });

            //Label on Focus
            $(".pcs-input").focus(function () {
                $(this).parent().addClass("focused");
            }).blur(function () {
                if ($(this).val()) {
                    return false;
                } else {
                    $(this).parent().removeClass("focused");
                }
            });
        });

    }, {}]
}, {}, [1]);
