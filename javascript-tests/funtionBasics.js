
window.onload = () =>{
    //const simpleFunctionParagraph = document.getElementById("simpleFunction");
    const functionCalls = document.getElementById('function-calls');
    const callUserInput = document.getElementById('call-user-input');

    functionCalls.onclick =() => {
    simpleFunction();
    functionParameters("abc");
    functionReturn();
    const returnValue = functionReturn();
    console.log(returnValue);
    }
    calluserinput.onclick = ()=>{
        const showuserinputParagraph = document.getElementById('show-user-input');
        const userinput = document.getElementById('user-input');
        userinputParagraph.textContent = userinput.value;
    }

   // simpleFunctionParagraph.textContent = 'some value';
}
// function simpleFunction(){
//     const displayText = "functions should consist of statements designed to perform a single task."
//     console.log("functions should consist of statements designed to perform a single task.");
//     simpleFunctionParagraph.textContent = 'some value';
//     console.log(displayText);
//     simpleFunctionParagraph.textContent = displayText;
//     //simpleFunctionParagraph.textContent = "functions consist of statements";
// }

function simpleFunction(){
    const displayText = "functions should consist of statements designed to perform a single task."
    const simpleFunctionParagraph= document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
    //simpleFunctionParagraph.textContent = "functions consist of statements";
}
function functionParameters(value){
    const functionParametersParagraph= document.getElementById("function-parameters");
    console.log(value)
    functionParametersParagraph.textContent = value;
    
}

function functionReturn(){
    return "Many functions return value";
}

simpleFunction();
functionParameters();


console.log()
// function add(a,b){
//     console.log(a+b);
// }
// function addr(){
//     console.log(2+3);
// }
