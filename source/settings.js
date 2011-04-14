window.addEvent("domready", function () {
    var settings = new FancySettings("GMail Counter");
    settings.create("General", "Behaviour", "description", {
        "text": "Dies sind doch gute Aussichten, oder? Jacken werden für immer schmutzabweisen sein, für immer und ewig in allen Lebenslagen und vor allem auch auf dem Mond. Warum ich hierfür kein Lorem Ipsum verwende, weiß ich auch nicht."
    });
    settings.create("General", "Behaviour", "button", {
        "label": "Bestellen Sie hier:",
        "text": "Jetzt kaufen"
    });
    settings.create("General", "Behaviour", "text", {
        "label": "Oder geben Sie hier ihre Daten ein:",
        "text": "Name"
    });
    settings.create("General", "Behaviour", "checkbox", {
        "label": "Bestellung aktivieren"
    });
    settings.create("General", "Behaviour", "slider", {
        "label": "Größe Ihrer Jacke:",
        "max": "160",
        "min": "70",
        "step": "1"
    });
    settings.create("General", "Behaviour", "popupButton", {
        "label": "Wählen Sie jetzt noch die Farbe:",
        "options": [
            {
                "value": "blue",
                "text": "Blau"
            },
            {
                "value": "green",
                "text": "Grün"
            },
            {
                "value": "red",
                "text": "Rot"
            }
        ]
    });
    settings.create("General", "Behaviour", "listBox", {
        "label": "Oder wählen Sie sie hier:",
        "options": [
            {
                "value": "blue",
                "text": "Blau"
            },
            {
                "value": "green",
                "text": "Grün"
            },
            {
                "value": "red",
                "text": "Rot"
            }
        ]
    });
    settings.create("General", "Behaviour", "radioButtons", {
        "label": "Oder sogar hier:",
        "options": [
            {
                "value": "blue",
                "text": "Blau"
            },
            {
                "value": "green",
                "text": "Grün"
            },
            {
                "value": "red",
                "text": "Rot"
            }
        ]
    });
    
    
    
    
    
    
    
    
    
    settings.create("General", "Malfunction", "description", {
        "text": "Dies sind doch gute Aussichten, oder? Jacken werden für immer schmutzabweisen sein, für immer und ewig in allen Lebenslagen und vor allem auch auf dem Mond. Warum ich hierfür kein Lorem Ipsum verwende, weiß ich auch nicht."
    });
    settings.create("General", "Malfunction", "button", {
        "label": "Bestellen Sie hier:",
        "text": "Jetzt kaufen"
    });
    settings.create("General", "Malfunction", "text", {
        "label": "Oder geben Sie hier ihre Daten ein:",
        "text": "Name"
    });
    settings.create("General", "Malfunction", "checkbox", {
        "label": "Bestellung aktivieren"
    });
    settings.create("General", "Malfunction", "slider", {
        "label": "Größe Ihrer Jacke:",
        "max": "160",
        "min": "70",
        "step": "1"
    });
    
});
