function loader(){
    const getNamesButton = document.getElementById('getNames');
    const functionButton = document.getElementById('getFunctionObject');

    getNamesButton.onclick = function(){
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('');
        
        //myObject.getName();
        //console.log(name);
        const Fullname = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDispla');
    }

    functionButton.onclick = functionObject;
}
window.onload = loader;

const myObject = {
    firstName: 'fred',
    lastName: 'smith',
    getName: function() {
       return this.firstName +'' + this.lastName;
   }
};

myObject.middleName = 'barfoo';
myObject.getFullName = function() {
    return this.firstName +
    '' + this.middleName + 
    '' + this.lastName;
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());

const FunctionObject = () => {
    //console.log('my function object');
    const firstName ='sue';
    const lastName = 'jones';

    const getName = () => {
        return 'Function Object';
    }
    FunctionObject.prototype.getFullName = () => {
        return 'This is the full name' + firstName + lastName;
    }
    console.log(getName());
}