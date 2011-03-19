(function () {
    this.FancySettings = new Class({
        "aTabHasBeenCreated": false,
        
        "initialize": function (name) {
            // Set the page title
            document.title = name;
            
            // Initialize the search
            //TBI
            
            // Initialize the tab creator
            this.tab = new TabCreator($("tab-container"), $("content"));
        },
        
        "createTab": function (name) {
            var tabSystem = this.tab.create();
            tabSystem.tab.set("text", name);
            
            if (!this.aTabHasBeenCreated) {
                this.tab.select(tabSystem.tab);
                this.aTabHasBeenCreated = true;
            }
            
            return tabSystem.content;
        }
    });
})();
