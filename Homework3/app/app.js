function initView() {
    $.get("../views/nav.html", function(nav) {
        $("#nav").html(nav);
    });

    $.get("../views/footer.html", function(footer) {
        $("#footer").html(footer);
    });
}

$(document).ready(function() {
    initView();
});