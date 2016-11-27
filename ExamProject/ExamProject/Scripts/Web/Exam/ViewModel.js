'use strict'

var ViewModel_Exam = function () {
    var self = this;

    self.onClickEvents = function () {
        Service_Exam.addSubmitionOnClickEvent("exam_begin_button", "Are you sure you want to start the exam?", ["exam_begin_button"], "exam_1", true);
        Service_Exam.addSubmitionOnClickEvent("submit_button_1", "Are you sure you want to move to the next question?", ["submit_button_1", "exam_1"], "exam_2", false);
    }

    self.questionsClickEvents = function () {
        $(".button").unbind();
        $(".button").on("click", function () {
            $(".questions_content").css("display", "none");
            var id = this.id;
            id = id.substring(1);

            $("#option" + id).css("display", "block");
            $(".button").css("background-color", "white");
            this.style.backgroundColor = "#c2d1f0";
        });
    }
}