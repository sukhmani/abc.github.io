
window.onload = () =>{
    const simpleFunctionParagraph = document.getElementById("simpleFunction");
    const functionCalls = document.getElementById('function-calls');

    functionCalls.onclick =() => {
simpleFunction();
    }
    simpleFunctionParagraph.textContent = 'some value';
}
function simpleFunction(){
    console.log("functions should consist of statements designed to perform a single task.");
    simpleFunctionParagraph.textContent = 'some value';
}

function functionParameters(value){
    console.log(value)
}

function add(a,b){
    console.log(a+b);
}
function addr(){
    console.log(2+3);
}
simpleFunction();
functionParameters();
add(2 + 3);