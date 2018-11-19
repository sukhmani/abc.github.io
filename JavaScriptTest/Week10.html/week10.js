window.onload = () => {
    const objectLiteralAction =document.getElementById('object-literal-action')
    const  numbersAction = document.getElementById('numbers-action');
    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById('object-literal-display')
        //const displayString = 'you clicked a button';
       // console.log('you clicked the button');
       console.log(objectLiteral.getName());
       
       objectLiteralDisplay.textContent = displayLiteral.getName();
    }
    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-action');
        numbersDisplay.textContent = numbers;
        for (let number of numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));

           // console.log(number);
           numbersDisplay.appendChild(li);
        }
    }
}
//const numbers = [3, 2, 1];
//const string = [one];
const numbers = [1, 2, 3];
const objectLiteral = {
    objectName: 'object literal is my name',

    getName: function() {
        return this.objectName;
    }
}