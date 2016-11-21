'use strict'

window.addEventListener("load", runServer);

function runServer() {
    if (document.getElementById("exam_id") !== null) {
        Controller_Exam["init"]();
    }
}
