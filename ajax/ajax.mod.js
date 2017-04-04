var ajax = function () {
    
    var module = {};
    module.params = {};
    
    module.setParamStr = function (params) {
        this.params = params;
    };
    
    module.setParams = function (params) {
        var pairs = [];
        
        for (k in params) {
            pairs.push(k + "=" + params[k]);
        }
        this.params = pairs.join("&");
    };
    
    module.get = function (url, successFunc, errorFunc) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        finishRequest(xhr, successFunc, errorFunc);
    };
    
    function finishRequest (xhr, successFunc, errorFunc) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        
        console.log("Params: " + module.params);
        
        if (module.params) {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(module.params);
        } else {
            xhr.send();
        }
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) { 
                return;
            }

            if (xhr.status !== 200) {
                errorFunc(xhr.status, xhr.statusText);
            } else {
                successFunc(xhr.responseText);
            }
        };    
    };
    
    module.post = function (url, successFunc, errorFunc) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        finishRequest(xhr, successFunc, errorFunc);
    };
    
    return module;
};
