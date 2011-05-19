//
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/fancy-settings
// License: LGPL v2.1
//
(function () {
    var FancySettings = this.FancySettings = new Class({
        "tabs": {},
        
        "initialize": function (name, icon) {
            // Set title and icon
            $$("title")[0].set("text", name);
            $("favicon").set("href", icon);
            $("icon").set("src", icon);
            
            this.search = new Search($("search"), $("search-result-container"));
            this.tab = new Tab($("tab-container"), $("tab-content-container"));
        },
        
        "create": function (params) {
            var tab,
                group,
                row,
                content,
                bundle;
            
            // Create tab if it doesn't exist already
            if (this.tabs[params.tab] === undefined) {
                this.tabs[params.tab] = {"groups":{}};
                tab = this.tabs[params.tab];
                
                tab.content = this.tab.create();
                tab.content.tab.set("text", params.tab);
                tab.content.tab.addEvent("click", this.search.reset.bind(this.search));
                tab.content = tab.content.content;
                
                (new Element("h2", {
                    "text": params.tab
                })).inject(tab.content);
            } else {
                tab = this.tabs[params.tab];
            }
            
            // Create group if it doesn't exist already
            if (tab.groups[params.group] === undefined) {
                tab.groups[params.group] = {};
                group = tab.groups[params.group];
                
                group.content = (new Element("table", {
                    "class": "setting group"
                })).inject(tab.content);
                
                row = (new Element("tr")).inject(group.content);
                
                (new Element("td", {
                    "class": "setting group-name",
                    "text": params.group
                })).inject(row);
                
                content = (new Element("td", {
                    "class": "setting group-content"
                })).inject(row);
                
                group.setting = new Setting(content);
            } else {
                group = tab.groups[params.group];
            }
            
            // Create and index the setting
            console.log(group.setting);
            bundle = group.setting.create(params);
            bundle.searchString = (bundle.searchString + "•" + params.tab + "•" + params.group).toLowerCase();
            this.search.add(bundle);
            
            return bundle;
        }
    });
    
    FancySettings.__proto__.initWithManifest = function (manifest, callback) {
        var request,
            response,
            settings,
            output;
        
        request = new Request({
            "url": manifest
        });
        request.addEvent("complete", function () {
            response = request.response.text;
            
            // Remove single line comments
            response = response.replace(/\/\/.*\n/g, "");
            
            try {
                response = JSON.parse(response);
            } catch (e) {
                throw "errorParsingManifest";
            }
            
            settings = new FancySettings(response.name);
            settings.manifestOutput = {};
            
            response.tabs.each(function (tab) {
                tab.groups.each(function (group) {
                    group.settings.each(function (setting) {
                        output = settings.create(tab.name, group.name, setting.type, setting);
                        if (typeOf(setting.name) === "string" && setting.name !== "") {
                            settings.manifestOutput[setting.name] = output;
                        }
                    })
                });
            });
            
            if (typeOf(callback) === "function") {
                callback(settings);
            }
        });
        request.send();
    };
}());
