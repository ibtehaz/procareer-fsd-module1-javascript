/* You have given N bricks. You need to construct a staircase as follows:
	1. =
	2. ==
	3. ===
	4. ====
Where = indicates one brick. Another condition is row-1 should have 1 brick, row-2 should have 2 bricks and so on. i.e., i-th row should have 'i' bricks. Your task is to find out total number of staircases can be formed with the given condition.

Input Format: 
-------------
Line 1 : An integer, N

Output Format: 
--------------
Line 1 : Print an integers, number of staircases

Sample Input 1:  
--------------
5

Sample Output 1:
----------------
2

Explanation:
row-1:	=
row-2:	==
row-3:	==
Only 2 rows satisfy the condition.

Sample Input 2:  
---------------
8

Sample Output 2:
----------------
3

Explanation:
row-1:	=
row-2:	==
row-3:	===
row-4:	==
Only 3 rows satisfy the condition.

*/
let readline=require('readline').createInterface({input:process.stdin,output:process.stdout});
let input;
readline.question('',function(line){
        input=parseInt(line);
        solution(input);
        readline.close();
    });

function solution(input) {
    let totalBricks = input
    let currentRowBricks = 0
    let staircases = 0

    while(totalBricks > currentRowBricks) {
        staircases++;
        currentRowBricks += staircases;
        if (totalBricks >= currentRowBricks) {
            totalBricks -= currentRowBricks
        } else { 
            break
        }
    }
    console.log(staircases)
}