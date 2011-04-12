(function () {
    this.FancySettings = new Class({
        "initialize": function (name) {
            // Set the page title
            document.title = name;
            
            // Initialize the search
            //TBI
            
            // Initialize the tab creator
            this._tab = new Tab($("tab-container"), $("content"));
        },
        
        "tab": function (name) {
            var bundle = this._tab.new();
            bundle.tab.set("text", name);
            return bundle.content;
        },
        
        "new": function (tab, type, params) {
            var setting = new Setting(tab);
            return setting.new(type, params);
        }
    });
    
    this.FancySettings.initWithManifest = function (name) {
        console.log("i would do something...");
    };
}());
