'use strict'

window.addEventListener("load", runServer);

function runServer() {
    var element = document.getElementById("logIn");
    element.addEventListener("click", locationReload);

    if (document.getElementById("exam_id") !== null) {
        Controller_Exam["init"]();
    }

    function locationReload() {
        window.location.href = window["location"]["origin"] + "/Account/Login";
    }
}
