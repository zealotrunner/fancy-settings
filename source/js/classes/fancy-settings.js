(function () {
    this.FancySettings = new Class({
        "tabs": {},
        
        "initialize": function (name) {
            // Set the Page Title
            document.title = name;
            
            // Initialize the Search
            //TBI
            
            // Initialize the Tab Creator
            this.tab = new Tab($("tab-container"), $("content"));
        },
        
        "create": function (tab, group, type, params) {
            // Check Tab & Group Names
            if (typeOf(tab) !== "string" || tab === "") {
                throw invalidTab;
            }
            if (typeOf(group) !== "string" || group === "") {
                throw invalidGroup;
            }
            
            // Create Tab if it doesn't exist already
            if (this.tabs[tab] === undefined) {
                this.tabs[tab] = {"groups":{}};
                
                this.tabs[tab].content = this.tab.create();
                this.tabs[tab].content.tab.set("text", tab);
                
                this.tabs[tab].content = this.tabs[tab].content.content;
                (new Element("h2", {
                    "text": tab
                })).inject(this.tabs[tab].content);
            }
            tab = this.tabs[tab];
            
            // Create Group if it doesn't exist already
            if (tab.groups[group] === undefined) {
                tab.groups[group] = {};
                
                tab.groups[group].content = (new Element("table", {
                    "class": "setting group"
                })).inject(tab.content);
                
                var row = (new Element("tr")).inject(tab.groups[group].content);
                
                (new Element("td", {
                    "class": "setting group-name",
                    "text": group
                })).inject(row);
                
                var content = (new Element("td", {
                    "class": "setting group-content"
                })).inject(row);
                
                tab.groups[group].setting = new Setting(content);
            }
            group = tab.groups[group];
            
            // Create the Setting
            return group.setting.create(type, params);
        }
    });
    
    this.FancySettings.initWithManifest = function (name) {
        //TBI
    };
}());
