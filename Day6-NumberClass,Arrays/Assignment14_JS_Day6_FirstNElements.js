/*Write a JavaScript function to get the first n numbers of a given set of numbers. 

Expected Output :
-----------------
[]                                                                                                                      
-1                                                                                                                      
[ 7, 9, 0 ]                                                                                                            
[ 7, 9, 0, -2 ]                                                                                                         
[] 

*/

function first(arr, num) {
    if(arr === null || arr === undefined) {
        return 0
    }
    if(num === null || num === undefined) {
        return -1
    }
    return arr.splice(0, num)
    
}

console.log(first([7, 9, 0, -2],0));
console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([],6));