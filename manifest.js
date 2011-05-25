// SAMPLE
this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "textBox1",
            "type": "text",
            "label": i18n.get("password"),
            "text": i18n.get("x-characters"),
            "masked": true
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "description1",
            "type": "description",
            "text": i18n.get("description")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "checkbox1",
            "type": "checkbox",
            "label": i18n.get("enable")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "button1",
            "type": "button",
            "label": i18n.get("disconnect"),
            "text": i18n.get("logout")
        },
        {
            "tab": "Details",
            "group": "Volume",
            "name": "slider1",
            "type": "slider",
            "label": "Sound volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "popupButton1",
            "type": "popupButton",
            "label": "Soup 1 should be:",
            "options": [
                {
                    "value": "hot",
                    "text": "Hot and yummy"
                },
                {
                    "value": "cold"
                },
                ["freezing", "Freezing and gross"],
                ["frozen"],
                "nonexistent"
            ]
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "listBox1",
            "type": "listBox",
            "label": "Soup 2 should be:",
            "options": [
                {
                    "value": "hot",
                    "text": "Hot and yummy"
                },
                {
                    "value": "cold"
                },
                ["freezing", "Freezing and gross"],
                ["frozen"],
                "nonexistent"
            ]
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "radioButtons1",
            "type": "radioButtons",
            "label": "Soup 3 should be:",
            "options": [
                {
                    "value": "hot",
                    "text": "Hot and yummy"
                },
                {
                    "value": "cold"
                },
                ["freezing", "Freezing and gross"],
                ["frozen"],
                "nonexistent"
            ]
        }
    ]
};
