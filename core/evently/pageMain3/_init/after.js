function(e, match) {
    var app = $$(this).app;
    
    $.evently.connect($(document.body), $(".app-menu", this), ["showLoading", "hideLoading"]);
    
    $.evently.connect($("#notifications_count_widget"), $(".topics"), ["setNotificationsCount"]);
    
    $(".app-menu", this).evently("space-menu", app);
}
