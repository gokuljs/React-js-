//MAP
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
var mymap=new Map();
mymap.set(1,"uno")
mymap.set(2,"uno")
mymap.set(3,"uno")
mymap.set(4,"uno")
mymap.set(5,"uno")// inserting values into map 

console.log(mymap)

// now retriving all the values in the map
// using for of loop 
for(let key of mymap.keys()){
    console.log(key)
}
for(let value of mymap.values()){
    console.log(value)
}
//retriving both at one timew 
// when we use for of loop we get key and value first which is diffrent in for eachloop 
for(let [key,value] of mymap){
    console.log(key+" = "+ value)
}

// using foreach 

mymap.forEach((values)=>console.log(values))
mymap.forEach((values,keys)=>console.log(values+"    "+keys))
// normally foreach loop gives value first and then key 
// and for of loop is going to give key then value 

// delete a value 
// synstax mymap.delete(key)
mymap.delete(2)