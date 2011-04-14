window.addEvent("domready", function () {
    var settings = new FancySettings("My Extension");
    
    // Add your settings here
    // Example:
    // settings.create("Tab 1", "Group 1", "text", {
    //     "label": "Enter your Birthday:",
    //     "text": "e.g. \"18\""
    // });
    //
    // or use the manifest and replace the line above with
    // var settings = new FancySettings.initWithManifest("manifest.json");
});
