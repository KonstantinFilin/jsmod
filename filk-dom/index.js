var DomManager = function (selector, root) {
    this.root = root ? document.getElementById(root) : document;
    
    if (!this.root) {
        console.log("Can't find selector: " + root);
    }
    
    this.selector = selector;
    this.items = this.root.querySelectorAll(selector);
}

DomManager.prototype.attach = function (func) {
    for (var i = 0; i < this.items.length; i++) {
        func(this.items[i]);
    }
}

var ElementManager = function(triggerEl) {
    this.triggerEl = triggerEl;
};

ElementManager.prototype.attachEvent = function (eventName, func) {
    var el = this.triggerEl;
    this.triggerEl.addEventListener(
        eventName, 
        function (event) { 
            func(el, event); 
        }
    );
};

exports.DomManager = DomManager;
exports.ElementManager = ElementManager;

