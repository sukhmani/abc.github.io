
const addToList = 
// function(){
//   //  listButton.onclick =() => {
//         const myList = document.getElementById('myList');

//         for (let i; i<5; i++){
//             elfCode.appendToList(myList,i);
//         }
//     }

windows.onload =() => {

    /*
    * listButton: variable
    * 
    */
    const listButton = document.getElementById('run-for-loop');
    listButton.onclick = function(){
const myList = document.getElementById('myList');
    
  //  listButton.onclick = addToList;
    for (let i; i<5; i++){
         elfCode.appendToList(myList,i);
    }
};
}