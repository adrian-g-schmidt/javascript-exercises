const repeatString = function(word, numberRepeats) {
    let finalString = '';
    if (numberRepeats<0) finalString = 'ERROR';
    for (i=0; i<numberRepeats; i++){
        finalString += word;
    };
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
