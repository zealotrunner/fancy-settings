//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    var Bundle,
        Tab;
    
    Bundle = new Class({
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
            if (this.creator.activeBundle && this.creator.activeBundle !== this) {
                this.creator.activeBundle.deactivate();
            }
            this.tab.addClass("selected");
            this.content.addClass("show");
            this.creator.activeBundle = this;
        },
        
        "deactivate": function () {
            this.tab.removeClass("selected");
            this.content.removeClass("show");
            this.creator.activeBundle = null;
        }
    });
    
    Tab = this.Tab = new Class({
        "activeBundle": null,
        
        "initialize": function (tabContainer, contentContainer) {
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
