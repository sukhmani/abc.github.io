let num =3;
const numberString = '3';
const rain = true;

console.log((num, numberString));
console.log(typeof num, typeof numberString, typeof rain);
console.log(num + numberString);

if(rain === true) {
    console.log('go to the gym'); 
}
else{
    console.log('walk');
}

num = 5;
console.log('modulus test', num % 2);
console.log('modulus test', (num % 2)=== 0);

function evenOrOdd(value) {
    if((value % 2)=== 0) {
        console.log('The number '+ value + ' is even');
    }
    else {
        console.log('The number '+ value + ' is odd');
    }
}

evenOrOdd(4);
evenOrOdd(15);


if((num % 2)=== 0) {
    console.log('The number '+ num+ ' is even');
}
else {
    console.log('The number '+ num + ' is odd');
}
num = 4;
console.log('modulus test', (num % 2)=== 0);

var app = {
    isEven: function(input) {
        if (input % 2 === 0) {
    console.log('Your input of'+ input + 'even');
        }else {
    console.log('Your input of'+ input + 'odd');
}
console.log('modulus test', (num % 2)=== 0);
}
};
