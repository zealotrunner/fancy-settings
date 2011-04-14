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
        
        "new": function (tab, type, params) {
            // Check Tab Name
            if (typeOf(tab) !== "string" || tab === "") {
                throw invalidTab;
            }
            
            // Create Tab if it doesn't exist already
            if (this.tabs[tab] === undefined) {
                this.tabs[tab] = {};
                
                this.tabs[tab].content = this.tab.new();
                this.tabs[tab].content.tab.set("text", tab);
                
                this.tabs[tab].content = this.tabs[tab].content.content;
                this.tabs[tab].setting = new Setting(this.tabs[tab].content);
            }
            tab = this.tabs[tab];
            
            // Create the Setting
            return tab.setting.new(type, params);
        }
    });
    
    this.FancySettings.initWithManifest = function (name) {
        //TBI
    };
}());
