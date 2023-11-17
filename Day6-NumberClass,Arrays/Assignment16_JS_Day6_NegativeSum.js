/* A subarray of an n-element array is an array composed from a contiguous block 
of the original array's elements. 
For example, if array = [1, 2, 3], 
then the subarrays are [1], [2], [3], [1,2], [2,3], and [1, 2, 3]. 
Something like [1,3] would not be a subarray as it's not a contiguous subsection 
of the original array.

Given an array of n numbers, find and print its number of negative subarrays on a new line.

Input Format :
--------------
Line 1 : N space-separated numbers.

Output Format :
---------------
Line 1 : A number, the total number of negative subarrays.

Sample Input 1 :
----------------
1 -2 4 -5 1

Sample Output 1 :
-----------------
9

Explanation :
-------------
Given array A = [1, —2, 4, —5, 1]

There are nine negative subarrays.
Thus, we print 9 on a new line.

Sample Input 2 :
----------------
1 2 3 4 5

Sample Output 2 :
-----------------
0
*/

let readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
let list;
readline.question('', function(line) {
    list = line.split(" ").map(Number);
    console.log(solution(list));
    readline.close();
});

function solution(list) {
    let count = 0;

    for(let i = 0; i < list.length; i++) {
        let sum = 0
        for(let j = i; j < list.length; j++) {
            sum += list[j]
            if (sum < 0) {
                count++
            }
        }
    }
    return count
}