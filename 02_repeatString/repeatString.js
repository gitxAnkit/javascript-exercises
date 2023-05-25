const repeatString = function(string, num) {

    let str = string;
    if( num == 0){
        str ='';
    }
    else if( num < 0){
        str ='ERROR';
    }
    else{
        for (let i=1; i<num; i++){
        
            str =str + string;
            
        }
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
