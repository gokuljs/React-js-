class Person{
    constructor(name){
        this.name=name
    }
    printNameArrow(){

        // normally inside arrow fucntion this keyword works diffrently 
        setTimeout(() => {
            console.log("arrow"+this.name) // this prints the name 
            // arrow function does not depend upon where the arrow fucntion is called
            // it works globally 
        }, 100);
    }

    printNameFunction(){
        setTimeout(function() {
            console.log("function"+this.name) // this dosent print the name 
            // depend on whhere it is called 
        }, 100);
    }
}

// creating an object 
let person =new person("bob")
person.printNameArrow()
person.printNameFunction()
console.log(this.name)// output is none is because it is declared inside class 

