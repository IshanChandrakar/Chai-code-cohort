const arr = [1,2,3,4,5,6]

arr.forEach((element, index) => {
    console.log(`${index} : ${element}`);   
});

Array.prototype.myForeach = function(userFn){
    
}