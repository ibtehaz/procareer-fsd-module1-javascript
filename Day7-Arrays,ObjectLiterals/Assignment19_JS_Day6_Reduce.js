/* Write a Javascript code to read numbers from users and get product of 
each element in array and print the result.

NOTE: Use Array Reduce method

Input Format :
--------------
Line 1 : N space-separated numbers.

Output Format :
---------------
Line 1 : A number, the product of each element in array.


Sample Input 1:
---------------
1 2 3 4 5

Sample Output 1:
---------------
120


Sample Input 2:
---------------
-1 -1 -1

Sample Output 2:
---------------
-1


*/

let readline = require('readline').createInterface({input: process.stdin, output: process.stdout});
let list;
readline.question('', function(line) {
    list = line.split(" ").map(Number);
    solution(list);
    readline.close();
});

function solution(list) {
    // Code implementation here
    console.log(list.reduce((a,c) => a * c))
}
