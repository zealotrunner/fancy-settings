(function () {
    var Bundle = new Class({
        "initialize": function (params) {
            this.params = (typeOf(params) === "object") ? params : {};
            
            this.createElements();
            this.setupElements();
            this.assembleElements();
            this.createEvents();
            
            return this.bundle;
        },
        
        "createElements": function () {
            this.bundle = new Element("div", {
                "class": "setting bundle general"
            });
            
            this.container = new Element("div", {
                "class": "setting container general"
            });
            
            this.element = new Element("div", {
                "id": String.uniqueID(),
                "class": "setting element general"
            });
            
            this.label = new Element("label", {
                "class": "setting label general",
                "for": this.element.get("id")
            });
        },
        
        "setupElements": function () {
            
        },
        
        "assembleElements": function () {
            this.element.inject(this.container);
            this.label.inject(this.container);
            this.container.inject(this.bundle);
        },
        
        "createEvents": function () {
            this.element.addEvent("change", function () {
                
            });
        },
        
        "get": function () {
            return false;
        },
        
        "set": function () {
            return this;
        }
    });
    
    Bundle.Button = new Class({
        "Extends": Bundle
    });
    
    Bundle.Text = new Class({
        "Extends": Bundle
    });
    
    Bundle.Checkbox = new Class({
        "Extends": Bundle
    });
    
    Bundle.Slider = new Class({
        "Extends": Bundle
    });
    
    Bundle.PopupButton = new Class({
        "Extends": Bundle
    });
    
    Bundle.ListBox = new Class({
        "Extends": Bundle
    });
    
    Bundle.RadioButtons = new Class({
        "Extends": Bundle
    });
    
    Bundle.Group = new Class({
        "Extends": Bundle
    });
    
    Bundle.Description = new Class({
        "Extends": Bundle
    });
    
    
    
    
    
    
    
    window.addEvent("domready", function () {
        console.log("ok");
        (new Bundle.Button("",{
            "text": "Ausführen",
            "action": function () {
                alert("ok");
            }
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
