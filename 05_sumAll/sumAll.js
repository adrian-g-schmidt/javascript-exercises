const sumAll = function(a, b) {
    if (a<0 || b<0) return "ERROR";
    if ((typeof a) !='number') return "ERROR";
    if ((typeof b) !='number') return "ERROR";

    let value = (1+Math.abs(a-b))*(a+b)/2;
    return value
};

// Do not edit below this line
module.exports = sumAll;
