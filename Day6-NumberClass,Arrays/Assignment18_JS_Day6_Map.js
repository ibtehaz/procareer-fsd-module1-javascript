/* Write a Javascript program that will read user-supplied numbers, 
apply squares or cubes to each element in an array, 
and then publish the outcome in an array format subject to the constraint listed below.

Execute square if the element is even, otherwise execute cube.

NOTE: Please use the Array Map function.

Input Format :
--------------
Line 1 : N space-separated numbers.

Output Format :
---------------
Line 1 : An array

Sample Input 1:
---------------
1 2 3 4 5

Sample Output 1:
---------------
[1, 4, 27, 16, 125]


Sample Input 2:
---------------
0 -4 7 -2 6 -3

Sample Output 2:
---------------
[ 0, 16, 343, 4, 36, -27 ]


*/
let readline=require('readline').createInterface({input:process.stdin,output:process.stdout});
let list;
readline.question('',function(line){
        list = line.split(" ").map(Number);
        solution(list);
        readline.close();
    });

function solution(list){
    let res = list.map(el => el % 2 === 0 ? el ** 2 : el ** 3)
    console.log(res)
}