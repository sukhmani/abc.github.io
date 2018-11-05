windows.onload =() => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick =() => {
        const myList = document.getElementById('myList');

        for (let i; i<s; i++){
            elfCode.appendToList(myList,i);
        }
    }
}