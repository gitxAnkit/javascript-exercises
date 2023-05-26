const sumAll = function(start, end) {
  
        if( !Number.isInteger(start) || !Number.isInteger(end) ){
            return "ERROR";
        }
        let sum =0;
        if( start >0 && end >0){
             for (let i=Math.max(start,end); i>0; --i){
                 sum = sum +i;
             } 
             return sum;
        }
        
         else {
            return 'ERROR'
         }
    
};
console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
