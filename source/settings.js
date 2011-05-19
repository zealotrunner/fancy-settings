window.addEvent("domready", function () {
    // Option 1: Use the manifest:
    /*
    new FancySettings.initWithManifest("manifest.json", function (settings) {
        settings.manifestOutput.button1.addEvent("action", function () {
            alert("hello, here i am");
        });
    });
    */
    
    // Option 2: Do everything manually:
    var settings = new FancySettings("My Extension", "icon.png");
    
    var checkbox1 = settings.create({
        "tab": "tabName",
        "group": "groupName",
        "type": "checkbox",
        "name": "checkbox1",
        "label": "Enable this"
    });
    
    settings.create({
        "tab": "tabName",
        "group": "groupName",
        "type": "button",
        "label": "Press me softly:",
        "text": "Right Here"
    });
    
    settings.create({
        "tab": "Tab 2",
        "group": "Some Grop",
        "type": "text",
        "masked": true,
        "text": "6 - 12 characters",
        "label": "Enter password:"
    });
    
    checkbox1.addEvent("action", function (value) {
        alert("you toggled me: " + value);
    });
});
