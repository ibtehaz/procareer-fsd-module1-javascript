/* Write a program to check if a given number is COMPLETE NUMBER or NOT
Note:
A Number is said to be COMPLETE NUMBER if the individual digits of the number are all even 
if the individual digits of the number are not even then print NOT COMPLETE NUMBER 

Assume 0 as a Even Number

Sample Input1:
--------------
46 

Sample Output1:
---------------
COMPLETE NUMBER

Sample Input2:
--------------
135

Sample Output2:
---------------
NOT COMPLETE NUMBER

*/





function isCompleteNumber(num) {
    while (num > 0) {
        let lastDigit = num % 10
        if (lastDigit % 2 !== 0) {
            console.log("NOT COMPLETE NUMBER")
            return
        }
        num = Math.floor(num / 10)
    }
    console.log("COMPLETE NUMBER")
}

isCompleteNumber(135)

// Aproach 2

/* 

function isComplete(num) {
    let nums = num.toString().split('')
    for(num of nums) {
        if(parseInt(num) % 2 !== 0) {
            console.log("NOT COMPLETE NUMBER")
            return
        }
    }
    console.log("COMPLETE NUMBER")
}

isComplete(135)

*/