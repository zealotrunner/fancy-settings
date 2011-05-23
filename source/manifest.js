// SAMPLE MANIFEST
this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "Information",
            "group": "Login",
            "name": "textBox1",
            "type": "text",
            "label": "Password:",
            "text": "6 - 12 characters",
            "masked": true
        },
        {
            "tab": "Information",
            "group": "Login",
            "name": "description1",
            "type": "description",
            "text": "This is a description. You can write any text inside of this.<br>\
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem\
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
            "tab": "Information",
            "group": "Logout",
            "name": "checkbox1",
            "type": "checkbox",
            "label": "Enable this"
        },
        {
            "tab": "Information",
            "group": "Logout",
            "name": "button1",
            "type": "button",
            "label": "Disconnect:",
            "text": "Logout"
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
                }
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
                }
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
                }
            ]
        }
    ]
};
