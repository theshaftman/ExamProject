'use strict'

var Service_Exam = (function () {

    var id = "exam_id";
    var minutes = 20;
    var seconds = 0;

    return {
        addSubmitionOnClickEvent: addSubmitionOnClickEvent
    };

    function addSubmitionOnClickEvent(buttonID_1, message, removeIdArray, buttonID_2, isTimed) {
        $("#" + buttonID_1).unbind();
        $("#" + buttonID_1).on("click", function (e) {
            e.preventDefault();

            if (confirm(message)) {
                // TODO: Update for done change.

                for (var i = 0; i < removeIdArray.length; i++) {
                    $("#" + removeIdArray[i]).css("display", "none");
                }

                $("#" + buttonID_2).css("display", "block");

                if (isTimed) {
                    setTimeFunction();
                } else {
                    // TODO: Send the results.
                }
            }
        });
    }

    function setTimeFunction() {
        var currentTimeout = setInterval(function () {
            var currentMin = minutes.toString();
            if (currentMin.length < 2) {
                currentMin = "0" + currentMin;
            }

            var currentSec = seconds.toString();
            if (currentSec.length < 2) {
                currentSec = "0" + currentSec;
            }

            $("#time").text(currentMin + ":" + currentSec);
            seconds -= 1;

            if (seconds < 0) {
                minutes -= 1;
                seconds = 59;
            }
            if (minutes < 0) {
                // TODO: Send the results.
                $("#exam_1").css("display", "none");
                $("#exam_2").css("display", "block");
                clearTimeout(currentTimeout);
            }
        }, 1000);
    }

}());