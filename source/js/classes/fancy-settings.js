(function () {
    this.FancySettings = new Class({
        "initialize": function (name) {
            // Set the page title
            document.title = name;
            
            // Initialize the search
            //TBI
            
            // Initialize the tab creator
            this.tab = new TabSystemCreator($("tab-container"), $("content"));
        },
        
        "createTab": function (name) {
            var tabSystem = this.tab.create();
            
            tabSystem.tab.set("text", name);
            
            
            
            return tabSystem.content;
        }
    });
    
    this.FancySettings.__proto__.initWithManifest = function (name) {
        console.log("i would do something...");
    };
})();
