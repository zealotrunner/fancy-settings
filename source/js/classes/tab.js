//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    var Bundle = new Class({
        "creator": null,
        "active": false,
        "tab": null,
        "content": null,
        
        "initialize": function (creator) {
            this.creator = creator;
            
            // Create DOM elements
            this.tab = new Element("div", {
                "class": "tab"
            });
            
            this.content = new Element("div", {
                "class": "tab-content"
            });
            
            // Create event handlers
            this.tab.addEvent("click", (function (event) {
                this.activate();
            }).bind(this));
        },
        
        "activate": function () {
            // Check if we're already active
            if (this.active) {
                return;
            }
            
            // Deactivate the currently active bundle
            if (this.creator.activeBundle) {
                this.creator.activeBundle.deactivate();
            }
            
            // Activate us
            this.tab.addClass("selected");
            this.content.addClass("show");
            
            // Tell our creator that we're the active bundle
            this.creator.activeBundle = this;
            
            this.active = true;
        },
        
        "deactivate": function () {
            // Check if we're already unactive
            if (!this.active) {
                return;
            }
            
            // Deactivate us
            this.tab.removeClass("selected");
            this.content.removeClass("show");
            
            this.active = false;
        }
    });
    
    this.Tab = new Class({
        "activeBundle": null,
        
        "initialize": function (tabContainer, contentContainer) {
            // Check containers
            if (typeOf(tabContainer) !== "element" || typeOf(contentContainer) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.tabContainer = tabContainer;
            this.contentContainer = contentContainer;
        },
        
        "create": function () {
            // Create a new bundle
            var bundle = new Bundle(this);
            
            // Inject the bundle into the DOM
            bundle.tab.inject(this.tabContainer);
            bundle.content.inject(this.contentContainer);
            
            // Activate the bundle if it's the first created
            if (!this.activeBundle) {
                bundle.activate();
            }
            
            return bundle;
        }
    });
}());
