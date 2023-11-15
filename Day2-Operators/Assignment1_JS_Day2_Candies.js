


/* Cindy and Melody have gone trick-or-treating and are back with a basket full of candies. 
They have counted the candies and are not sure whether or not they can split the candies equally between them.  
Given the count , can you help them figure this out? 
Print “You both will get equal candies” when they can split them equally. 
if not print “One of you will get one more than the other”

Input Format :
--------------
Line-1 : A number 

Output Format :
---------------
Line-1 : Print You both will get equal candies or One of you will get one more than the other

Sample Input 1:
--------------
15

Sample Output 1:
---------------
One of you will get one more than the other


Sample Input 2:
--------------
8

Sample Output 2:
---------------
You both will get equal candies
*/


let readline = require('readline').createInterface({input:process.stdin, output:process.stdout})
let candies;

readline.question('', function(line) {
    candies = parseInt(line);
    solution(candies);
    readline.close();
});

function solution(candies) {
    if(candies % 2 === 0) {
        console.log("You both will get equal candies")
    } else {
        console.log("One of you will get more than the other")
    }
}