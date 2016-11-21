'use strict'

var Controller_Exam = (function () {
    
    var id = "exam_id";
    var model = new ViewModel_Exam();

    return {
        init: init
    };

    function init() {
        model.run();
    }

}());