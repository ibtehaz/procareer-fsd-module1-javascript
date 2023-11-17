/* Write a JavaScript program which accepts a number as input 
and inserts -(hyphen) between each two even numbers. 

Input Format :
--------------
Line-1 : A number 

Output Format :
---------------
Line-1 : A string

Sample Input 1:
---------------
25468

Sample Output 1:
----------------
254-6-8

Sample Input 2:
---------------
15371

Sample Output 2:
----------------
15371

*/

let readline=require('readline').createInterface({input:process.stdin,output:process.stdout});
let number;
readline.question('',function(line){
        number=parseInt(line);
        solution(number);
        readline.close();
    });

function solution(number){
    let numStr = number.toString()
    let hyStr = numStr[0]
    for(let i = 1; i < numStr.length; i++) {
        if(numStr[i - 1] % 2 === 0 && numStr[i] % 2 === 0) {
            hyStr += '-'
        }
        hyStr += numStr[i]
    }
    console.log(hyStr)
}