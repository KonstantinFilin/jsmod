var test = function () {
    var module = {};
    
    module.isSimple = function (num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        
        return true;
    }
    
    module.getOddSum = function (arr) {
        return arr.reduce(function (a, b) {
            if (b % 2 > 0) {
                a += b;
            }
            return a; 
        }, 0);
    }
    
    module.getEvenSum = function (arr) {
        return arr.reduce(function (a, b) {
            console.log("1: ", a, ":", b);
            if (b % 2 === 0) {
                a += b;
            }
            console.log("2: ", a, ":", b);
            return a; 
        }, 0);
    }

    module.getSimpleNumbers = function (max) {
        var ret = [];
        
        for (var i = 1; i<= max; i++) {
            if (module.isSimple(i)) {
                ret.push(i);
            }
        }
        
        return ret;
    }
    
    return module;
};
