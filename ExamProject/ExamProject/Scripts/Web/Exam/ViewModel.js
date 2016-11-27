'use strict'

var ViewModel_Exam = function () {
    var self = this;

    self.onClickEvents = function () {
        Service_Exam.addSubmitionOnClickEvent("exam_begin_button", "Are you sure you want to start the exam?", ["exam_begin_button"], "exam_1", true);
        Service_Exam.addSubmitionOnClickEvent("submit_button_1", "Are you sure you want to move to the next question?", ["submit_button_1", "exam_1"], "exam_2", false);

        $("#submit_button_2").unbind();
        $("#submit_button_2").on("click", function () {
            if (confirm("Are you sure you would like to finish your exam?")) {
                // TODO: Modify the location href.
                window.location.href = "/";
            }
        });
    }

    self.questionsClickEvents = function () {
        $(".button").unbind();
        $(".button").on("click", function () {
            $(".questions_content").css("display", "none");
            var id = this.id;
            id = id.substring(1);

            $("#option" + id).css("display", "block");
            $(".button").css("background-color", "white");

            var allQuestions = $(".questions_content");

            for (var i = 0; i < allQuestions.length; i++) {
                var anyClicked = $(allQuestions[i]).find("input:checked");

                if (anyClicked.length > 0) {
                    $("#b" + (i + 1)).css("background-color", "#D9E0D9");
                }
            }

            this.style.backgroundColor = "#c2d1f0";
        });
    }
}