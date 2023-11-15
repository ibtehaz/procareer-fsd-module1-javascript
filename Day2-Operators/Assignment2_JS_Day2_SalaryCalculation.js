/*
A company announces revised Dearness Allowance (DA) and Special Allowances (SA) for their employees as per the tariff given below:
 
Basic			        Dearness Allowance (DA)	            Special Allowance (SA)
------------------------------------------------------------------------------------
Up to $ 10,000			10%		                            5%
$ 10,001 - $ 20,000		12%		                            8%
$ 20,001 - $ 30,000		15%		                            10%
$ 30,001 and above		20%		                            12%
 
Write a JS program to accept the name and basic salary (BS) of an employee. 
Calculate and display gross salary.
 
Gross Salary = Basic + Dearness Allowance + Special Allowance

Print the information in the given format:
Name:   	xxx 
Basic:   	xxx 
DA:    		xxx
Spl. Allowance:  xxx
Gross Salary:	xxx
                                                   
Input Format :
--------------
Line-1 : A string, name of the employee
Line-2 : A number, basic salary of the employee 
 
Output Format :
---------------
Line-1 : Print Name of the employee
Line-2 : Print basic salary of the employee
Line-3 : Print DA of the employee
Line-4 : Print special allowance of the employee
Line-5 : Print gross salary of the employee
 
Sample Input :
--------------
Robert                                                                                                                  
28000 

Sample Output :
---------------
Name: Robert                                                                                                            
Basic: 28000                                                                                                            
DA: 4200                                                                                                                
Spl. Allowance: 2800                                                                                                    
Gross Salary: 35000 

*/
var readline=require('readline').createInterface({input:process.stdin,output:process.stdin});
var ename,il=1,basic;
readline.on('line',function(line){
    if(il==2){
        basic=parseFloat(line);
        solution(ename,basic);
        readline.close();
    }
    else
    {
        ename=line;
        il++;
    }
});

function solution(ename,basic) {
    let da = 0;
    let sa = 0;
    if(basic <= 10000) {
        da = basic * 0.10;
        sa = basic * 0.05;
    } else if (basic <= 20000) {
        da = basic * 0.12;
        sa = basic * 0.08;
    } else if (basic <= 30000) {
        da = basic * 0.15;
        sa = basic * 0.10;
    } else {
        da = basic * 0.20;
        sa = basic * 0.12;
    }

    let gross = basic + da + sa;
    console.log("Name: " + ename);
    console.log("Basic: " + basic);
    console.log("DA: " + da);
    console.log("Spl. Allowance: " + sa);
    console.log("Gross Salary: " + gross);

}