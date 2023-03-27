// const removeFromArray = function(array, ...args) {
//     for (i=0; i<array.length; i++){
//         for (const arg of args) {
//             if (array[i]===arg){
//                 array.splice(i, 1)
//                 i-=1
//             }        
//         }
//     }
//     return array
// };

const removeFromArray = function(array, ...args) {
    return array.filter(element => !args.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
