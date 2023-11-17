/* There are two arrays with individual values, 
Write a JavaScript program to compute 
the sum of each individual index value from the given arrays.

Input Format :
--------------
Line 1 : N space separated numbers, list1[]
Line 2 : N space separated numbers, list2[]

Output Format :
---------------
Line 1 : N space separated numbers, result[]

Sample Input 1:
---------------
1 0 2 3 4
3 5 6 7 8 13

Sample Output 1:
----------------
4 5 8 10 12 13

Sample Input 2:
---------------
10 20 30 40
10 20 30 40

Sample Output 2:
----------------
20 40 60 80

*/
var readline=require('readline').createInterface({input:process.stdin,output:process.stdin});
var list1, list2, il = 1;
readline.on('line',function(line){
    if(il==2){
        list2=line.split(" ").map(Number);
        solution(list1, list2);
        readline.close();
    }
    else
    {
        list1=line.split(" ").map(Number);
        il++;
    }
});

function solution(list1, list2){
    let maxLength = Math.max(list1.length, list2.length)
    const arr = []

    for(let i = 0; i < maxLength; i++) {
        let val1 = i < list1.length ? list1[i] : 0
        let val2 = i < list2.length ? list2[i] : 0
        arr.push(val1 + val2)
    }

    console.log(arr.join(' '))

}