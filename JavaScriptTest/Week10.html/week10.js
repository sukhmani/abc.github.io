window.onload = () => {
    const objectLiteralAction =document.getElementById('object-literal-action')
    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById('object-literal-display')
        const displayString = 'you clicked a button';
       // console.log('you clicked the button');
       console.log(displayString);
       objectLiteralDisplay.textContent = displayString;
    }
}