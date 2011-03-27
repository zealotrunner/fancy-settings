(function () {
    var Bundle = new Class({
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
            
            // Deactivate the currently activated Bundle
            if (this.creator.activatedBundle) {
                this.creator.activatedBundle.deactivate();
            }
            
            // Activate us
            this.tab.addClass("selected");
            this.content.addClass("show");
            
            // Tell our Creator that we're the activated Bundle
            this.creator.activatedBundle = this;
            
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
    
    this.Tab = new Class({
        "activatedBundle": null,
        
        "initialize": function (tabContainer, contentContainer) {
            // Check Containers
            if (typeOf(tabContainer) !== "element" || typeOf(contentContainer) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.tabContainer = tabContainer;
            this.contentContainer = contentContainer;
        },
        
        "new": function () {
            // Create a new Bundle
            var bundle = new Bundle(this);
            
            // Inject the Bundle into the DOM
            bundle.tab.inject(this.tabContainer);
            bundle.content.inject(this.contentContainer);
            
            // Activate the Bundle if it's the first created
            if (!this.activatedBundle) {
                bundle.activate();
            }
            
            return bundle;
        }
    });
}());
