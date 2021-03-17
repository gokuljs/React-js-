// arrow function ()=>
function sum(a,b){
    return a+b
}
// converting this into arrow function 
let sum=(a,b)=>{
    return a+b
}
// or 
let sum=(a,b)=> a+b // this sautomatically understands thew fucntion should be returned 
//OR 
let numbers=number=>number=>0

// other use case
document.addEventListener('click',function(){
    console.log("click")
})
// using arrow function 
document.addEventListener('click',()=> console.log("clicked"))