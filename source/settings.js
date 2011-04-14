window.addEvent("domready", function () {
    var settings = new FancySettings("My Extension");
    settings.new("General", "text", {
        "name": "age",
        "text": "Gib dein Alter ein"
    });
});
