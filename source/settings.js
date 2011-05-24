window.addEvent("domready", function () {
    // Option 1: Use the manifest:
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.button1.addEvent("action", function () {
            alert("You clicked me!");
        });
    });
    
    // Option 2: Do everything manually:
    /*
    var settings = new FancySettings("My Extension", "icon.png");
    
    var textBox1 = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "textBox1",
        "type": "text",
        "label": i18n.get("password"),
        "text": i18n.get("x-characters"),
        "masked": true
    });
    
    var description1 = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "description1",
        "type": "description",
        "text": i18n.get("description")
    });
    
    var button1 = settings.create({
        "tab": "Information",
        "group": "Logout",
        "name": "button1",
        "type": "button",
        "label": "Disconnect:",
        "text": "Logout"
    });
    
    // ...
    
    button1.addEvent("action", function () {
        alert("You clicked me!");
    });
    */
});
