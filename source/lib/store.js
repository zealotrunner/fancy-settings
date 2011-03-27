/*
// Copyright (c) 2011 Frank Kohlhepp
// https://github.com/frankkohlhepp/store-js
// License: MIT-license
*/
(function () {
    this.Store = function (name) {
        var storePrototype = {
            "save": function () {
                var stringifiedObj = JSON.stringify(this);
                localStorage.setItem(name, stringifiedObj);
                
                if (localStorage.getItem(name) !== stringifiedObj) {
                    throw "savingFailed";
                }
                
                return this;
            },
            
            "remove": function () {
                localStorage.removeItem(name);
                for (var key in this) {
                    if (this.hasOwnProperty(key)) {
                        delete this[key];
                    }
                }
                
                return this;
            }
        };
        
        var store = JSON.parse(localStorage.getItem(name) || "{}");
        store.__proto__ = storePrototype;
        return store;
    };
})();
