const teas = ['black tea', 'milk tea', 'lemon tea', 'ginger tea']
teas.push('green tea')
let index = teas.indexOf('milk tea')
teas.splice(index,1)

let maxChar = 0
let maxCharTea 
for(let i=0; i<teas.length; i++){
    if(teas[i].length>maxChar){
        maxChar = teas[i].length
        maxCharTea = teas[i]
    }
    
}
console.log(maxCharTea);
console.log(maxChar);




