var showMessage = (message) =>
{
    console.log("=========");
    console.log("===="+message+"=====");
    console.log("=========");
}

showMessage('Operator Precedence');
let result = 1 + (2 * 3);
console.log(result);

result = (1 + 2) * 3;
console.log(result);

 console.log("=========");
 showMessage('For Loops');
for(let i = 10; i < 25; i =i+2)
{
    console.log(i);
}