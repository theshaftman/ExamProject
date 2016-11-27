'use strict'

var ViewModel_Exam = function () {
    var self = this;

    self.onClickEvents = function () {
        Service_Exam.addSubmitionOnClickEvent("exam_begin_button", "Are you sure you want to start the exam?", ["exam_begin_button"], "exam_1", true);
        Service_Exam.addSubmitionOnClickEvent("submit_button_1", "Are you sure you want to move to the next question?", ["submit_button_1", "exam_1"], "exam_2", false);
    }
}