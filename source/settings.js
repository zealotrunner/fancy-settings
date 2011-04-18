window.addEvent("domready", function () {
    var settings = new FancySettings("My Extension");
    //var settings = new FancySettings.initWithManifest("manifest.json");
    
    // Add your settings here
    // Example:
    // settings.create("Tab 1", "Group 1", "text", {
    //     "label": "Enter your Birthday:",
    //     "text": "e.g. \"18\""
    // });
    //
    // or use the manifest and replace the line above with
    // var settings = new FancySettings.initWithManifest("manifest.json");
    
    
    
    
    
    
    
    
    
    settings.create("General", "Behavior", "text", {
        "name": "label",
        "label": "GMail Label:",
        "text": "e.g. \"notifications\""
    });
    settings.create("test", "Behavior", "radioButtons", {
        "name": "open_emails_in",
        "label": "Open Emails in:",
        "options": [
            {
                "value": "new_tab",
                "text": "a new tab"
            },
            {
                "value": "new_window",
                "text": "a new window"
            },
            {
                "value": "gmail_tab",
                "text": "an already open GMail tab"
            },
            {
                "value": "active_tab",
                "text": "the active tab"
            }
        ]
    });
    
    settings.create("General", "Google Apps", "checkbox", {
        "name": "google_apps_enabled",
        "label": "Enable Google Apps"
    });
    settings.create("General", "Google Apps", "text", {
        "name": "google_apps_domain",
        "label": "Domain:",
        "text": "e.g. \"example.com\""
    });
});
