const reverseString = function(words) {

    let string = words;
    let length = string.length;
    let reverse ='';

    for (let i=length-1; i>=0; --i){
        reverse = reverse + string.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
