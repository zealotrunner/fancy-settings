(function () {
    var TabSystem = new Class({
        "creator": null,
        "activated": false,
        "tab": null,
        "content": null,
        
        "initialize": function (creator) {
            this.creator = creator;
            
            // Create DOM Elements
            this.tab = new Element("div", {
                "class": "tab"
            });
            
            this.content = new Element("div", {
                "class": "tab-content"
            });
            
            // Create Event Handlers
            this.tab.addEvent("click", (function (event) {
                this.activate();
            }).bind(this));
        },
        
        "activate": function () {
            // Check if we're already activated
            if (this.activated) {
                return;
            }
            
            // Deactivate the currently activated Tab System
            if (this.creator.activatedTabSystem) {
                this.creator.activatedTabSystem.deactivate();
            }
            
            // Activate us
            this.tab.addClass("selected");
            this.content.addClass("show");
            
            // Tell our Creator that we're the activated Tab System
            this.creator.activatedTabSystem = this;
            
            this.activated = true;
        },
        
        "deactivate": function () {
            // Check if we're already deactivated
            if (!this.activated) {
                return;
            }
            
            // Deactivate us
            this.tab.removeClass("selected");
            this.content.removeClass("show");
            
            this.activated = false;
        }
    });
    
    this.TabSystemCreator = new Class({
        "activatedTabSystem": null,
        
        "initialize": function (tabContainer, contentContainer) {
            // Check Containers
            if (typeOf(tabContainer) !== "element" || typeOf(contentContainer) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.tabContainer = tabContainer;
            this.contentContainer = contentContainer;
        },
        
        "create": function () {
            // Create a new Tab System
            var tabSystem = new TabSystem(this);
            
            // Inject the Tab System into the DOM
            tabSystem.tab.inject(this.tabContainer);
            tabSystem.content.inject(this.contentContainer);
            
            // Activate the Tab System if it's the first created
            if (!this.activatedTabSystem) {
                tabSystem.activate();
            }
            
            return tabSystem;
        }
    });
}());
