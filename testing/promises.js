const mypromise=new Promise((resolve,reject)=>{
    if (false){

    
    setTimeout(() => {
        resolve("i have succeded")
    },1000);
}
else{
    reject("i have failed");
}
})
// now you want to access the promises
mypromise
.then(value =>console.log(value)) // success is in then call back 
.catch(reject=>(console.log(reject)));// reject is in failure call back 
// with the help of promise we are able to seprate form successful api calls from no successfull api calls 


//nomrally fetch is lot simliar to promise it return a promise 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(then=>console.log(json))

