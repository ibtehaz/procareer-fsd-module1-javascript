/* Write a javascript program to check if a given number is good number or not.

A number is good if its every digit is larger than the sum of digits which are on the right side of that digit. 

For example 9620 is good number because 2 > 0, 6 > 2+0 and 9 > 6+2+0.
if the given number good number print true other wise print false.

Input Format:
-------------
Line 1: A number

Output Format:
--------------
Line 1: A Boolean value, true or false

Sample Input 1:
---------------
9620

Sample Output 1:
----------------
true

Sample Input 2:
---------------
230

Sample Output 2:
----------------
false

*/
let readline=require('readline').createInterface({input:process.stdin,output:process.stdout});
let num;
readline.question('',function(line){
        num=parseInt(line);
        solution(num);
        readline.close();
    });



// function solution(num){
//     let numStr = num.toString();
//     let sumDigits = 0

//     for(let i = numStr.length - 1; i > 0; i--) {
//         sumDigits += parseInt(numStr[i])
//         if(numStr[i - 1] <= sumDigits) {
//             console.log(false)
//             return
//         }
//     }
//     console.log(true)
// }