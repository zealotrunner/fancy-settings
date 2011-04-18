//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    this.FancySettings = new Class({
        "tabs": {},
        
        "initialize": function (name) {
            // Set the page title
            document.title = name;
            
            // Initialize the search
            this.search = new Search($("search"), $("search-results"));
            
            // Initialize the tab creator
            this.tab = new Tab($("tab-container"), $("content"));
        },
        
        "create": function (tabName, groupName, type, params) {
            // Check tab & group names
            if (typeOf(tabName) !== "string" || tabName === "") {
                throw "invalidTabName";
            }
            if (typeOf(groupName) !== "string" || groupName === "") {
                throw "invalidGroupName";
            }
            
            // Create tab if it doesn't exist already
            if (this.tabs[tabName] === undefined) {
                this.tabs[tabName] = {"groups":{}};
                var tab = this.tabs[tabName];
                
                tab.content = this.tab.create();
                tab.content.tab.set("text", tabName);
                
                // Add an event to help the search
                tab.content.tab.addEvent("click", (function (event) {
                    this.search.searchBox.set("value", "");
                    this.search.find("");
                }).bind(this));
                
                tab.content = tab.content.content;
                (new Element("h2", {
                    "text": tabName
                })).inject(tab.content);
            } else {
                var tab = this.tabs[tabName];
            }
            
            // Create group if it doesn't exist already
            if (tab.groups[groupName] === undefined) {
                tab.groups[groupName] = {};
                var group = tab.groups[groupName];
                
                group.content = (new Element("table", {
                    "class": "setting group"
                })).inject(tab.content);
                
                var row = (new Element("tr")).inject(group.content);
                
                (new Element("td", {
                    "class": "setting group-name",
                    "text": groupName
                })).inject(row);
                
                var content = (new Element("td", {
                    "class": "setting group-content"
                })).inject(row);
                
                group.setting = new Setting(content);
            } else {
                var group = tab.groups[groupName];
            }
            
            // Create the setting
            var bundle = group.setting.create(type, params);
            bundle.searchString = bundle.searchString + " " + tabName.toLowerCase() + " " + groupName.toLowerCase();
            this.search.add(bundle);
            return bundle;
        }
    });
    
    this.FancySettings.initWithManifest = function (name) {
        //TBI
    };
}());
