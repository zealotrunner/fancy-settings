//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    this.Search = new Class({
        "index": [],
        
        "initialize": function (searchBox, container) {
            // Check containers
            if (typeOf(searchBox) !== "element" || typeOf(container) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.searchBox = searchBox;
            this.container = container;
            
            var setting = new Setting(this.container);
            this.nothingFound = setting.create("description", {
                "text": "nothing found"
            });
            this.nothingFound.bundle.set("id", "nothing-found");
            
            this.searchBox.addEvent("keyup", (function (event) {
                this.find(event.target.get("value"));
            }).bind(this));
            
            this.searchBox.addEventListener("search", (function (event) {
                this.find(event.target.get("value"));
            }).bind(this), false);
        },
        
        "add": function (setting) {
            this.index.push(setting);
        },
        
        "find": function (string) {
            this.index.each((function (setting) {
                setting.bundle.inject(setting.bundleContainer);
            }).bind(this));
            
            if (string.trim() === "") {
                document.body.removeClass("searching");
            } else {
                document.body.addClass("searching");
                var results = this.index.filter(function (setting) {
                    if (setting.searchString.contains(string.trim().toLowerCase())) {
                        if (setting.type !== "description") {
                            return true;
                        }
                    }
                });
                
                results.each((function (result) {
                    result.bundle.inject(this.container);
                }).bind(this));
                
                if (results.length === 0) {
                    this.nothingFound.bundle.addClass("show");
                } else {
                    this.nothingFound.bundle.removeClass("show");
                }
            }
        }
    });
}());
