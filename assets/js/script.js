var time = 0;
var timeStart = 9;
var timeEnd = 17 + 1;

function taskEl(timeStar, timeEnd) {
    var containerEl = $(".container");

    var timeBlockEl = $("<div></div>").addClass("row time-block");

    var hourEl = $("<div></div>").addClass("col-1 hour");

    var textBlock = $("<textarea></textarea>").addClass("col-10").attr("id", "textarea");

    var saveBtn = $("<button></button>").addClass("col saveBtn").html("<i class='fas fa-plus'></i>");

    //             9            17+1
    for (var i = timeStar; i < timeEnd; i++) {
        timeBlockEl.html(hourEl.html(
            "<div>" + (moment().set('hour', i).format('h a')).toUpperCase()
            + "</div>").add(containerEl).add(saveBtn),

            textBlock.text(schedule[i]),
            saveBtn
        );

        containerEl.append(timeBlockEl.clone()
        .attr("id", (moment().set('hour', i).format('H')))
        );
    };
};






