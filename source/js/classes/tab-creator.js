(function () {
    this.TabCreator = new Class({
        "initialize": function (tabContainer, contentContainer) {
            if (typeOf(tabContainer) !== "element" || typeOf(contentContainer) !== "element") {
                throw "containerNotAnElement";
            }
            
            this.tabContainer = tabContainer;
            this.contentContainer = contentContainer;
        },
        
        "create": function () {
            var tab = new Element("div", {
                "class": "tab"
            });
            
            tab.store("content", new Element("div", {
                "class": "tab-content"
            }));
            
            tab.addEvent("click", (function (event) {
                this.select(event.target);
            }).bind(this));
            
            tab.inject(this.tabContainer);
            tab.retrieve("content").inject(this.contentContainer);
            
            return {
                "tab": tab,
                "content": tab.retrieve("content")
            };
        },
        
        "select": function (tab) {
            this.unselect();
            
            tab.addClass("selected");
            tab.retrieve("content").addClass("show");
            
            this.selected = tab;
        },
        
        "unselect": function () {
            if (this.selected) {
                this.selected.removeClass("selected");
                this.selected.retrieve("content").removeClass("show");
                
                delete this.selected;
            }
        }
    });
})();
