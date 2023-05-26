const removeFromArray = function(array, ...args) {

    args.forEach((arg) => {
        index = array.indexOf(arg);
        if(index >-1){
            array.splice(index,1);
        }       
    });

    return array;
};
// console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
