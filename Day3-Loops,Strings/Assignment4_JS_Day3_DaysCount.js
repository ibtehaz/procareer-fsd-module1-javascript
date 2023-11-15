
/* David is learning days in a month of calendars.

David enters year and month number as input, print number of days in a given month as output.

Consider following scenarios,
-If the month is 1, 3, 5, 7, 8, 10, or 12, the number of days in a month is 31.
-If the month is 4, 6, 9, or 11, the number of days in that month is 30.
-If the month is 2, and the year is not the leap year, the number of days is 28.
If the year is the leap year, the number of days is 29.
-If the month is not in the valid range (1-12),
the default branch executes and sets the dayCount variable to -1, which indicates the invalid month.

Input Format :
Line-1 : A number, year
Line-2 : A number, month number in a year

Output Format :
Line-1 : A number, day count in the particular month of the year.

Sample Input 1:
2023
8

Sample Output 1:
31

Sample Input 2:
2023
15

Sample Output 2:
-1

Sample Input 3:
2024
2

Sample Output 3:
29

*/
var readline = require('readline').createInterface({ input: process.stdin, output: process.stdin });
var year, il = 1, month;
readline.on('line', function (line) {
    if (il == 1) {
        year = parseInt(line);
        il++;
    } else if (il == 2) {
        month = parseInt(line);
        solution(year, month);
        readline.close();
    }
});

function solution(year, month) {
    // Write your logic here
    let dayCount;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            dayCount = 31;
            break;
        case 4: case 6: case 9: case 11:
            dayCount = 30;
            break;
        case 2:
            dayCount = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28
            break
        default:
            dayCount = -1
    }

    console.log(dayCount)
}
