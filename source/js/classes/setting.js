//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    var settings = Store("settings"),
        Bundle = new Class({
        "Implements": Events,
        "searchString": "",
        
        "initialize": function (params) {
            this.params = ((typeOf(params) === "object") ? params : {});
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name], true);
            }
        },
        
        "addEvents": function () {
            this.element.addEvent("change", (function (event) {
                if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                    settings[this.params.name] = this.get();
                    settings.save();
                }
                
                this.fireEvent("action", this.get());
            }).bind(this));
        },
        
        "get": function () {
            return this.element.get("value");
        },
        
        "set": function (value, intern) {
            value = ((typeOf(value) === "string") ? value : "");
            
            this.element.set("value", value);
            
            if (!intern) {
                this.element.fireEvent("change");
            }
            
            return this;
        }
    });
    
    Bundle.Description = new Class({
        // text
        "Extends": Bundle,
        
        "initialize": function (params) {
            this.params = ((typeOf(params) === "object") ? params : {});
            
            this.createDOM();
            this.setupDOM();
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
        // label, text
        // action -> click
        "Extends": Bundle,
        
        "initialize": function (params) {
            this.params = ((typeOf(params) === "object") ? params : {});
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle button"
            });
            
            this.container = new Element("div", {
                "class": "setting container button"
            });
            
            this.element = new Element("input", {
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
                this.searchString += "•" + this.params.label;
            }
            
            if (typeOf(this.params.text) === "string") {
                this.element.set("value", this.params.text);
                this.searchString += "•" + this.params.text;
            }
            
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        },
        
        "addEvents": function () {
            this.element.addEvent("click", (function () {
                this.fireEvent("action");
            }).bind(this));
        }
    });
    
    Bundle.Text = new Class({
        // name, label, text, masked
        // action -> change & keyup
        "Extends": Bundle,
        
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
                this.searchString += "•" + this.params.label;
            }
            
            if (typeOf(this.params.text) === "string") {
                this.element.set("placeholder", this.params.text);
                this.searchString += "•" + this.params.text;
            }
            
            if (this.params.masked === true) {
                this.element.set("type", "password");
                this.searchString += "•" + "password";
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
                
                this.fireEvent("action", this.get());
            }).bind(this);
            
            this.element.addEvent("change", change);
            this.element.addEvent("keyup", change);
        }
    });
    
    Bundle.Checkbox = new Class({
        // name, label
        // action -> change
        "Extends": Bundle,
        
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
                "type": "checkbox",
                "value": "true"
            });
            
            this.label = new Element("label", {
                "class": "setting label checkbox",
                "for": this.element.get("id")
            });
        },
        
        "setupDOM": function () {
            this.element.inject(this.container);
            this.container.inject(this.bundle);
            
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
                this.searchString += "•" + this.params.label;
            }
        },
        
        "get": function () {
            return this.element.get("checked");
        },
        
        "set": function (value, intern) {
            value = ((typeOf(value) === "boolean") ? value : false);
            
            this.element.set("checked", value);
            
            if (!intern) {
                this.element.fireEvent("change");
            }
            
            return this;
        }
    });
    
    Bundle.Slider = new Class({
        // name, label, max, min, step
        // action -> change
        "Extends": Bundle,
        
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
                this.searchString += "•" + this.params.label;
            }
            
            if (typeOf(this.params.max) === "number") {
                this.element.set("max", this.params.max);
            }
            
            if (typeOf(this.params.min) === "number") {
                this.element.set("min", this.params.min);
            }
            
            if (typeOf(this.params.step) === "number") {
                this.element.set("step", this.params.step);
            }
            
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        },
        
        "get": function () {
            return Number.from(this.element.get("value"));
        },
        
        "set": function (value, intern) {
            var min = ((typeOf(this.params.min) === "number") ? this.params.min : 0);
            value = ((typeOf(value) === "number") ? value : min);
            
            this.element.set("value", value);
            
            if (!intern) {
                this.element.fireEvent("change");
            }
            
            return this;
        }
    });
    
    Bundle.PopupButton = new Class({
        // name, label, options[{value, text}]
        // action -> change
        "Extends": Bundle,
        
        "initialize": function (params) {
            this.params = ((typeOf(params) === "object") ? params : {});
            this.params.options = ((typeOf(this.params.options) === "array") ? this.params.options : []);
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name], true);
            }
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
                option = ((typeOf(option) === "object") ? option : {});
                
                if (typeOf(option.value) === "string" || typeOf(option.text) === "string") {
                    this.searchString += "•" + ((typeOf(option.text) === "string") ? option.text : option.value);
                }
                
                (new Element("option", {
                    "value": option.value,
                    "text": ((typeOf(option.text) === "string") ? option.text : option.value)
                })).inject(this.element);
            }).bind(this));
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.container);
                this.searchString += "•" + this.params.label;
            }
            
            this.element.inject(this.container);
            this.container.inject(this.bundle);
        }
    });
    
    Bundle.ListBox = new Class({
        // name, label, options[{value, text}]
        // action -> change
        "Extends": Bundle.PopupButton,
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle list-box"
            });
            
            this.container = new Element("div", {
                "class": "setting container list-box"
            });
            
            this.element = new Element("select", {
                "class": "setting element list-box",
                "size": "2"
            });
            
            this.label = new Element("label", {
                "class": "setting label list-box"
            });
            
            this.params.options.each((function (option) {
                option = ((typeOf(option) === "object") ? option : {});
                
                if (typeOf(option.value) === "string" || typeOf(option.text) === "string") {
                    this.searchString += "•" + ((typeOf(option.text) === "string") ? option.text : option.value);
                }
                
                (new Element("option", {
                    "value": option.value,
                    "text": ((typeOf(option.text) === "string") ? option.text : option.value)
                })).inject(this.element);
            }).bind(this));
        },
        
        "get": function () {
            return (this.element.get("value") || undefined);
        }
    });
    
    Bundle.RadioButtons = new Class({
        // name, label, options[{value, text}]
        // action -> change
        "Extends": Bundle,
        
        "initialize": function (params) {
            this.params = ((typeOf(params) === "object") ? params : {});
            this.params.options = ((typeOf(this.params.options) === "array") ? this.params.options : []);
            
            this.createDOM();
            this.setupDOM();
            this.addEvents();
            
            if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                this.set(settings[this.params.name], true);
            }
        },
        
        "createDOM": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle radio-buttons"
            });
            
            this.label = new Element("label", {
                "class": "setting label radio-buttons"
            });
            
            this.containers = [];
            this.elements = [];
            this.labels = [];
            
            var settingID = String.uniqueID();
            this.params.options.each((function (option) {
                option = ((typeOf(option) === "object") ? option : {});
                
                if (typeOf(option.value) === "string" || typeOf(option.text) === "string") {
                    this.searchString += "•" + ((typeOf(option.text) === "string") ? option.text : option.value);
                }
                
                var optionID = String.uniqueID(),
                    container = (new Element("div", {
                    "class": "setting container radio-buttons"
                })).inject(this.bundle);
                this.containers.push(container);
                
                this.elements.push((new Element("input", {
                    "id": optionID,
                    "name": settingID,
                    "class": "setting element radio-buttons",
                    "type": "radio",
                    "value": option.value
                })).inject(container));
                
                this.labels.push((new Element("label", {
                    "class": "setting element-label radio-buttons",
                    "for": optionID,
                    "text": ((typeOf(option.text) === "string") ? option.text : option.value)
                })).inject(container));
            }).bind(this));
        },
        
        "setupDOM": function () {
            if (typeOf(this.params.label) === "string") {
                this.label.set("text", this.params.label);
                this.label.inject(this.bundle, "top");
                this.searchString += "•" + this.params.label;
            }
        },
        
        "addEvents": function () {
            this.bundle.addEvent("change", (function (event) {
                if (typeOf(this.params.name) === "string" && this.params.name !== "") {
                    settings[this.params.name] = this.get();
                    settings.save();
                }
                
                this.fireEvent("action", this.get());
            }).bind(this));
        },
        
        "get": function () {
            var checkedEl = this.elements.filter((function (el) {
                return el.get("checked");
            }).bind(this));
            
            return (checkedEl[0] && checkedEl[0].get("value"));
        },
        
        "set": function (value, intern) {
            value = ((typeOf(value) === "string") ? value : "");
            
            var desiredEl = this.elements.filter((function (el) {
                return (el.get("value") === value);
            }).bind(this));
            desiredEl[0] && desiredEl[0].set("checked", true);
            
            if (!intern) {
                this.bundle.fireEvent("change");
            }
            
            return this;
        }
    });
    
    this.Setting = new Class({
        "initialize": function (container) {
            // Check container
            if (typeOf(container) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.container = container;
        },
        
        "create": function (type, params) {
            // Available types
            var types = {
                "description": "Description",
                "button": "Button",
                "text": "Text",
                "checkbox": "Checkbox",
                "slider": "Slider",
                "popupButton": "PopupButton",
                "listBox": "ListBox",
                "radioButtons": "RadioButtons"
            };
            
            // Check if the requested type is valid
            if (!Object.keys(types).contains(type)) {
                throw "invalidType";
            }
            
            // Create the bundle
            var bundle = new Bundle[types[type]](params);
            bundle.type = type;
            bundle.bundleContainer = this.container;
            bundle.bundle.inject(this.container);
            return bundle;
        }
    });
}());
