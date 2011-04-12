(function () {
    var settings = Store("settings");
    var Bundle = {};
    
    Bundle.Group = new Class({
        // label
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createDOM();
            this.setupDOM();
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle group"
            });
            
            this.container = new Element("div", {
                "class": "setting container group"
            });
            
            this.element = new Element("h2", {
                "class": "setting element group"
            });
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.element.set("text", this.params.label);
            }
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        }
    });
    
    Bundle.Description = new Class({
        // text
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createDOM();
            this.setupDOM();
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle description"
            });
            
            this.container = new Element("div", {
                "class": "setting container description"
            });
            
            this.element = new Element("p", {
                "class": "setting element description"
            });
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.text) === "string") {
                this.element.set("text", this.params.text);
            }
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        }
    });
    
    Bundle.Button = new Class({
        // label, text, action(click)
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle button"
            });
            
            this.container = new Element("div", {
                "class": "setting container button"
            });
            
            this.element = new Element("button", {
                "class": "setting element button",
                "type": "button"
            });
            
            this.label = new Element("label", {
                "class": "setting label button"
            });
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
            }
            
            if (typeOf(this.params.text) === "string") {
                this.element.set("text", this.params.text);
            }
            this.element.inject(this.container);
            
            this.container.inject(this.bundle);
        },
        
        "addEvents": function () {
            if (typeOf(this.params.action) === "function") {
                this.element.addEvent("click", (function () {
                    this.params.action();
                }).bind(this));
            }
        }
    });
    
    Bundle.Text = new Class({
        // name, label, text, action(change), masked
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name]);
            }
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle text"
            });
            
            this.container = new Element("div", {
                "class": "setting container text"
            });
            
            this.element = new Element("input", {
                "class": "setting element text",
                "type": "text"
            });
            
            this.label = new Element("label", {
                "class": "setting label text"
            });
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
            }
            
            if (typeOf(this.params.text) === "string") {
                this.element.set("placeholder", this.params.text);
            }
            if (this.params.masked === true) {
                this.element.set("type", "password");
            }
            this.element.inject(this.container);
            
            this.container.inject(this.bundle);
        },
        
        "addEvents": function () {
            var change = (function (event) {
                if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                    settings[this.params.name] = this.get();
                    settings.save();
                }
                
                if (typeOf(this.params.action) === "function") {
                    this.params.action(this.get());
                }
            }).bind(this);
            
            this.element.addEvent("change", change);
            this.element.addEvent("keyup", change);
        },
        
        "get": function () {
            return this.element.get("value");
        },
        
        "set": function (value) {
            value = (typeOf(value) === "string") ? value : "";
            this.element.set("value", value);
            return this;
        }
    });
    
    Bundle.Checkbox = new Class({
        // name, label, action(change)
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name]);
            }
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle checkbox"
            });
            
            this.container = new Element("div", {
                "class": "setting container checkbox"
            });
            
            this.element = new Element("input", {
                "id": String.uniqueID(),
                "class": "setting element checkbox",
                "type": "checkbox"
            });
            
            this.label = new Element("label", {
                "class": "setting label checkbox",
                "for": this.element.get("id")
            });
        },
        
        "setupDOM": function () {
            this.element.inject(this.container);
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
            }
            this.container.inject(this.bundle);
        },
        
        "addEvents": function () {
            this.element.addEvent("change", (function (event) {
                if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                    settings[this.params.name] = this.get();
                    settings.save();
                }
                
                if (typeOf(this.params.action) === "function") {
                    this.params.action(this.get());
                }
            }).bind(this));
        },
        
        "get": function () {
            return this.element.get("checked");
        },
        
        "set": function (value) {
            value = (typeOf(value) === "boolean") ? value : false;
            this.element.set("checked", value);
            return this;
        }
    });
    
    Bundle.Slider = new Class({
        // name, label, action(change), max, min, step
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name]);
            }
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle slider"
            });
            
            this.container = new Element("div", {
                "class": "setting container slider"
            });
            
            this.element = new Element("input", {
                "class": "setting element slider",
                "type": "range"
            });
            
            this.label = new Element("label", {
                "class": "setting label slider"
            });
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
            }
            
            if (typeOf(this.params.max) === "string") {
                this.element.set("max", this.params.max);
            }
            if (typeOf(this.params.min) === "string") {
                this.element.set("min", this.params.min);
            }
            if (typeOf(this.params.step) === "string") {
                this.element.set("step", this.params.step);
            }
            this.element.inject(this.container);
            
            this.container.inject(this.bundle);
        },
        
        "addEvents": function () {
            this.element.addEvent("change", (function (event) {
                if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                    settings[this.params.name] = this.get();
                    settings.save();
                }
                
                if (typeOf(this.params.action) === "function") {
                    this.params.action(this.get());
                }
            }).bind(this));
        },
        
        "get": function () {
            return this.element.get("value");
        },
        
        "set": function (value) {
            value = (typeOf(value) === "string") ? value : "";
            this.element.set("value", value);
            return this;
        }
    });
    
    Bundle.PopupButton = new Class({
        // name, label, action(change), options[{value, text}]
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            this.params.options = (typeOf(this.params.options) === "array") ? this.params.options : [];
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name]);
            }
            
            return this.bundle;
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle popup-button"
            });
            
            this.container = new Element("div", {
                "class": "setting container popup-button"
            });
            
            this.element = new Element("select", {
                "class": "setting element popup-button"
            });
            
            this.label = new Element("label", {
                "class": "setting label popup-button"
            });
            
            this.params.options.each((function (option) {
                option = (typeOf(option) === "object") ? option : {};
                
                (new Element("option", {
                    "value": option.value,
                    "text": option.text || option.value
                })).inject(this.element);
            }).bind(this));
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
            }
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        },
        
        "addEvents": function () {
            this.element.addEvent("change", (function (event) {
                if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                    settings[this.params.name] = this.get();
                    settings.save();
                }
                
                if (typeOf(this.params.action) === "function") {
                    this.params.action(this.get());
                }
            }).bind(this));
        },
        
        "get": function () {
            return this.element.get("value");
        },
        
        "set": function (value) {
            value = (typeOf(value) === "string") ? value : "";
            this.element.set("value", value);
            return this;
        }
    });
    
    Bundle.ListBox = new Class({
        "Extends": Bundle.PopupButton,
        
        "setupDOM": function () {
            this.element.set("size", "2");
            
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
            }
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    window.addEvent("domready", function () {
        
        (new Bundle.ListBox({
            "options": [
                {
                    "value": "test1",
                    "text": "Erster Test"
                }    ,

                    {
                        "value": "test2"
                    }  
            ],
            
            "label": "wähle dein lieblingsteil: ",
            "name": "hahaha"
        })).inject($("content"));
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return;
    this.Setting = new Class({
        "initialize": function (container) {
            // Check Container
            if (typeOf(container) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.container = container;
        },
        
        "new": function (id, type, params) {
            switch (type) {
                case "button":
                    //
                    break;
                case "textfield": // param password
                    //
                    break;
                case "checkbox":
                    //
                    break;
                case "slider":
                    //
                    break;
                case "popupButton":
                    //
                    break;
                case "listBox":
                    //
                    break;
                case "radioButtons":
                    //
                    break;
                case "group":
                    //
                    break;
                case "separator":
                    //
                    break;
            }
        }
    });
}());
