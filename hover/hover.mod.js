var hover = function (sourceClassname, destinationSelectorFunc) {
    var module = {};
    var elementList = document.querySelectorAll("." + sourceClassname);
    var len = elementList.length;
    
    for (var idx=0; idx < len; idx++) {
        elementList[idx].addEventListener("mouseover", function (event) {
            var destElement = destinationSelectorFunc(event.target);
            if (destElement) {
                destElement.style = "display: block;";
            }
        });
        
        elementList[idx].addEventListener('mouseout', onMouseOutListener, true);
    }
    
    function onMouseOutListener(event) {
        var e = event.toElement || event.relatedTarget;

        while (e && e.parentNode && e.parentNode !== window) {
            if (e.parentNode === this||  e === this) {
                if (e.preventDefault) e.preventDefault();
                return false;
            }
            e = e.parentNode;
        }

        var destElement = destinationSelectorFunc(event.target);
        if (destElement) {
            destElement.style = "display: none;";
        }
    }

    return module;
};
