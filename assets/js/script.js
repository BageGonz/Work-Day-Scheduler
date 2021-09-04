$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    function timeCheck() {
        var currentTime = moment().hours();
        $(".time-block").each(function () {
            var taskBlock = parseInt($(this).attr("id").split("hour")[1]);
            if (taskBlock > currentTime) {
                $(this).classList.add("past");
            }
            else if (taskBlock === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text, time);
    });

    const timeArray = [$("#hour9"),$("#hour10"),$("#hour11"),$("#hour12"),$("#hour13"),$("#hour14"),$("#hour15"),$("#hour16"),$("#hour17"),];



    timeCheck();
});









