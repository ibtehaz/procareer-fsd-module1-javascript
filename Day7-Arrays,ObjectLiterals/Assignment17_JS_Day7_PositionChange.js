/* Write a JavaScript function to move an array element from one position to another.

Input Format:
------------
Line 1 : An array, N space separated numbers
Line 2 : Two numbers, Space separated numbers, representing positions

Output Format:
--------------
Line 1 : An array, result array

Sample Input 1:
--------------
10 20 30 40 50
0 2

Sample Output 1:
---------------
[20, 30, 10, 40, 50]

Sample Input 2:
--------------
10 20 30 40 50
-1 -2

Sample Output 2:
---------------
[10, 20, 30, 40, 50]

*/

var readline=require('readline').createInterface({input:process.stdin,output:process.stdin});
var list, index1, index2, il = 1;
readline.on('line',function(line){
    if(il==2){
        [index1, index2] =line.split(" ").map(Number);
        solution(list, index1, index2);
        readline.close();
    }
    else
    {
        list=line.split(" ").map(Number);
        il++;
    }
});

function solution(arr, old_index, new_index){
    //Write logic here
    if(old_index < 0 || new_index < 0 || old_index >= arr.length | new_index >= arr.length) {
        console.log(arr.join(" "))
        return
    }
    let removedEl = arr.splice(old_index, 1)[0]
    arr.splice(new_index, 0, removedEl)
    console.log(arr)

}