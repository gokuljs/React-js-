class Person{
    constructor(name){
        this.name=name
    }
    printNameArrow(){
        setTimeout(() => {
            console.log("arrow"+this.name)
        }, 100);
    }

    printNameFunction(){
        setTimeout(function() {
            console.log("function"+this.name)
        }, 100);
    }
}

// creating an object 
let person =new person("bob")
person.printNameArrow()
person.printNameFunction()
