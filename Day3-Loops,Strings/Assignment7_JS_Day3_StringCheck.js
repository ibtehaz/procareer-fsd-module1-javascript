/* You are given two codes C1 and C2, both are strings. 
Your task is to check whether C2 lies in C1 or not.
If yes, return the first occurrence index of C2 in C1. Otherwise print -1.

Input Format:
-------------
Line-1: A string, C1.
Line-2: A string, C2.

Output Format: 
--------------
Line 1: An integer, print the index.

Sample Input 1:
--------------
goibibo
ib

Sample Output 1:
----------------
2

Sample Input 2:
--------------
goibibo
ibb

Sample Output 2:
----------------
-1

*/

let readline=require('readline').createInterface({input:process.stdin,output:process.stdin});
let C1, C2, il=1;
readline.on('line',function(line){
    if(il==2){
        C2 = line;
        solution(C1,C2);
        readline.close();
    }
    else
    {
        C1 = line;
        il++;
    }
});


function solution(C1, C2) {
    console.log(C1.indexOf(C2))
}