window.addEvent("domready", function () {
    var settings = new FancySettings("My Extension");
    var general = settings.tab("General");
    var details = settings.tab("Details");
    
    settings.new(general, "text", {
        "name": "age",
        "text": "Gib dein Alter ein"
    });
});
