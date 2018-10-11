const setTextButton = document.getElementById('set-text');
const userInput = document.getElementById('list-data');
const listButton = document.getElementById('add-to-list');

window.onload = () => {
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');

    listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}

    setTextButton.onclick = () => {
       userInput.value = 'The first item for my list';
    }
}