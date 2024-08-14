// script.js
$(document).ready(function() {
    $("#load-more").click(function() {
        $.ajax({
            url: "path/to/your/content.html",
            method: "GET",
            success: function(data) {
                $("#dynamic-content").html(data);
            }
        });
    });
});
