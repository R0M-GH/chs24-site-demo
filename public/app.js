function showStudent1Description() {
    var student1Description = document.getElementById("student1-description");
    student1Description.style.display = "block";
}

function showStudent2Description() {
    var student2Description = document.getElementById("student2-description");
    student2Description.style.display = "block";
}

$(document).ready(function() {
    $(".view-description-btn").click(function() {
        var descriptionId = $(this).attr("data-description-id");
        $("#" + descriptionId).toggle();
    });
});
