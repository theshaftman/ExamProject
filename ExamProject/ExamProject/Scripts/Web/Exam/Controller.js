'use strict'

var Controller_Exam = (function () {

    var id = "exam_id";
    var model = new ViewModel_Exam();

    return {
        init: init
    };

    function init() {
        // preventF12();

        model.onClickEvents();
        model.questionsClickEvents();
    }

    function preventF12() {
        $(document).keydown(function (event) {
            if (event.keyCode == 123) {
                return false;
            }
            else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                return false;
            }
        });

        $(document).on("contextmenu", function (e) {
            e.preventDefault();
        });
    }

}());