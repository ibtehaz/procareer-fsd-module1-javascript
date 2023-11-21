/* Print all names from the below array of objects

[
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 },
    { "name": "Mark", "age": 23 }
]

Expected Output :
-----------------
[ 'John', 'Peter', 'Mark' ]

*/
let data = [
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 },
    { "name": "Mark", "age": 23 }
];

let res = data.map(item => item.name)

console.log(res)