/* A feedback form for TheHamilton news, accepts a max of 15 words . Also a max of 100 characters.

Help us tell if the sentences are allowed in feedback form or not.

Print ‘Good to go’ if the count satisfies the rule. 
If not print , ‘Sentence is too lengthy, cut it down’

Input Format :
--------------
Line-1 : A sentence

Output Format :
---------------
Line-1 : Print sentence

Sample Input 1 :
---------------
The food at the cafeteria is pretty spicy, please cut down on the spices.

Sample Output 1 :
----------------
Good to go

Sample Input 2 :
---------------
The University must arrange for a shuttle bus to and from the Princeton Junction train station , for all those taking the Amtrak

Sample Output 2 :
----------------
Sentence is too lengthy, cut it down

*/


let readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
let feedback;
readline.question('', function (line) {
    feedback = line;
    solution(feedback);
    readline.close();
});

function solution(feedback) {
    const words = feedback.split(/\s+/);
    const wordCount = words.length

    const charCount = feedback.replace(/\s+/g).length

    console.log(charCount <= 100 && wordCount <= 15 ? 'Good to go' : 'Sentence is too lengthy, cut it down')

}