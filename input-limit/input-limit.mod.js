var inputLimit = function (settings, getContainerFunc) {
    var module = {};
    
    var targetSelector = settings && settings.source ? settings.source : ".input-limit-source";
    var currentSelector = settings && settings.current ? settings.current : ".input-limit-current";
    var totalSelector = settings && settings.total ? settings.total : ".input-limit-max";
    var restSelector = settings && settings.rest ? settings.rest : ".input-limit-rest";
    var maxDefault = settings && settings.max ?  settings.max : 100;
    var container = getContainerFunc ? getContainerFunc : function (element) { return element.parentNode; };

    var elementList = document.querySelectorAll(targetSelector);
    var len = elementList.length;
    
    function showInfo(element) {
        var max = element.getAttribute("data-max");
        
        if (!max) {
            max = maxDefault;
        }
        
        element.value = element.value.substring(0, max);
        var curLength = element.value.length;
        var currentEl = currentSelector ? container(element).querySelector(currentSelector) : "";
        var totalEl = totalSelector ? container(element).querySelector(totalSelector) : "";
        var restEl = restSelector ? container(element).querySelector(restSelector) : "";

        if (currentEl) {
            currentEl.innerHTML = curLength;
        }

        if (totalEl) {
            totalEl.innerHTML = max;
        }

        if (restEl) {
            restEl.innerHTML = max - curLength;
        }
    }
    
    for (var idx=0; idx < len; idx++) {
        showInfo(elementList[idx]);
        elementList[idx].addEventListener('keyup', function (event) {
            showInfo(event.target);
        });
    }
            
    return module;
};
