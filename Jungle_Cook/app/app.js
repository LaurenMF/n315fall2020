//import * as MODEL from "../model/model.js";

$(document).ready(function() {
    initView();
});

function initListeners() {
    $("#nav, nav a").click(function(e) {
        var btnId = this.id;
        MODEL.getView(btnId);
    });

    $(".navicon").click(function(e) {
        $("nav").toggleClass("navMobileView");
        $(".links").toggleClass("linksMobileView");
    });
}

function initView() {
    $.get("../views/nav.html", function (value) {
        $("nav").html(value);
        //initListeners();
    });
  
    $.get("../views/footer.html", function (value) {
        $("footer").html(value);
    });
}