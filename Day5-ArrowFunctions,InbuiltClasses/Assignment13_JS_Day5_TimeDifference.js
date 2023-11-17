/*
Write a JavaScript program that deals with various operations involving the Date object. 
Your program should implement the Time Difference Calculator: 
Create a function that calculates the time difference between two dates in days. 
The function should take two date strings as input and return the time difference as a positive integer.

Input Format :
--------------
Line 1: A String, date format
Line 2: A String, date format

Output Format :
--------------
Line 1: A number, difference in number of days

Sample Input :
--------------
2023-08-04
2023-08-05

Sample Output :
---------------
1
*/

let readline=require('readline').createInterface({input:process.stdin,output:process.stdin});
let date1, date2, il=1;
readline.on('line',function(line){
    if(il==2){
        date2 = line;
        solution(date1,date2);
        readline.close();
    }
    else
    {
        date1 = line;
        il++;
    }
});

function solution(startDateStr,endDateStr)
{
    let d1 = new Date(startDateStr)
    let d2 = new Date(endDateStr)

    let res = (Math.abs((d1-d2)/(1000 * 60 * 60 * 24)))

    console.log(res)
}