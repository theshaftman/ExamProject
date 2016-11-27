<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="Exam.aspx.cs" Inherits="ExamProject.Web.Exam" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <div id="exam_id">
        <a href="#" id="exam_begin_button" class="important">Begin</a>
        <div id="exam_1">
            <h1>Task 1</h1>
            <p id="time"></p>
            <div id="exam_header">
                <a href="#" class="important" id="submit_button_1">Submit</a>
                <a href="#" id="b1" class="button">1</a>
                <a href="#" id="b2" class="button">3</a>
                <a href="#" id="b3" class="button">4</a>
                <a href="#" id="b4" class="button">5</a>
                <a href="#" id="b5" class="button">2</a>
                <a href="#" id="b6" class="button">6</a>
                <a href="#" id="b7" class="button">7</a>
                <a href="#" id="b8" class="button">8</a>
                <a href="#" id="b9" class="button">9</a>
                <a href="#" id="b10" class="button">10</a>
                <a href="#" id="b11" class="button">11</a>
                <a href="#" id="b12" class="button">12</a>
                <a href="#" id="b13" class="button">13</a>
                <a href="#" id="b14" class="button">14</a>
                <a href="#" id="b15" class="button">15</a>
            </div>
            <div id="exam_content">
                <div class="questions_content" id="option1">
                    <h3>Title 1</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option2">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option3">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option4">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option5">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option6">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option7">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option8">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option9">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option10">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option11">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option12">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option13">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option14">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
                <div class="questions_content" id="option15">
                    <h3>Title</h3>
                    <input type="checkbox" />
                </div>
            </div>
        </div>
        <div id="exam_2">
            <h1>Task 2</h1>
            <a href="#" class="important" id="submit_button_2">Submit</a>
            <input type="file" id="drop_files" />
        </div>
    </div>
</asp:Content>
