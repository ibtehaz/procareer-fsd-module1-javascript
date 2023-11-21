/* Write a Javascript code to read numbers from users and return only odd numbers
from the array in array format.

NOTE : Please use the Array Filter.

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
[1, 3, 5]

Sample Input 2:
---------------
0 -4 7 -2 6 -3

Sample Output 2:
---------------
[7, -3]
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
    console.log(list.filter(el => el % 2 !== 0))
}
