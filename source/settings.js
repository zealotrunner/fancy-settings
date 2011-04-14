window.addEvent("domready", function () {
    var settings = new FancySettings("GMail Counter");
    settings.new("General", "group", {
        "label": "Google Apps"
    });
    settings.new("General", "checkbox", {
        "name": "google_apps_enabled",
        "label": "Enable Google Apps"
    });
    settings.new("General", "text", {
        "name": "google_apps_domain",
        "label": "Domain:",
        "text": "none"
    });
    settings.new("General", "text",  {
        "name": "gmail_label",
        "label": "GMail Label:",
        "text": "none"
    });
    
    settings.new("General", "popupButton", {
        "name": "open_links_in",
        "label": "Open Links in:",
        "options": [
            {
                "value": "new_window",
                "text": "a new window"
            },
            {
                "value": "new_tab",
                "text": "a new tab"
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
    
    settings.new("Sound Notifications", "checkbox", {
        "name": "sound_noti_enabled",
        "label": "Enable Sound Notifications"
    });
    settings.new("Sound Notifications", "slider", {
        "name": "sound_noti_volume",
        "label": "Volume:",
        "min": "0",
        "max": "10",
        "step": "1"
    });
    settings.new("Sound Notifications", "button", {
        "label": "Select a custom sound:",
        "text": "Browse..."
    });
});
