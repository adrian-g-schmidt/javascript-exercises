const reverseString = function(phrase) {
    reverseArray = []
    for (i=0; i<phrase.length; i++){
        reverseArray.push(phrase[i]);
    }
    let word = ''
    for (i=0; i<phrase.length; i++){
        word += reverseArray.pop();
    }
    return word
};

// Do not edit below this line
module.exports = reverseString;
