let firstNum = ""
let operation = ""
let secondNum = ""
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let operations = ["plus", "minus", "multiply", "divide"]
let output = document.querySelector("#output")

document.querySelector(".inputs").addEventListener('click',(event)=>{
    let userInput = event.target.id

    if(numbers.includes(userInput) && !operation){
        firstNum+=userInput
        output.textContent = firstNum

    }
    else if(operations.includes(userInput)){
        operation = userInput
        
        let operationOutput = document.createElement("span")
        if(userInput=="plus")
            operationOutput.textContent = " + "
        else if(userInput=="minus")
            operationOutput.textContent = " - "
        else if(userInput=="multiply")
            operationOutput.textContent = " * "
        else if(userInput=="divide")
            operationOutput.textContent = " / "
        output.appendChild(operationOutput)
    }
    else if(operation && numbers.includes(userInput)){
        secondNum+= userInput
        
        let secondNumOutput = document.createElement("span")
        secondNumOutput.textContent = userInput
        output.appendChild(secondNumOutput)
    }
    else if(userInput=="calculate"){
        let result = doOperation(firstNum, secondNum, operation)
        console.log(result)

        let resultOutput = document.createElement("div")
        resultOutput.textContent = ` =${result}`
        output.appendChild(resultOutput)
    }
    else if(userInput=="clear"){
        firstNum = ""
        secondNum = ""
        operation = ""
        result = ""
        output.textContent = "0"
    }

})

function doOperation(a,b,whichOperation){
    if(whichOperation=="plus")
        return parseInt(a) +parseInt(b)
    else if(whichOperation=="minus")
        return parseInt(a) - parseInt(b)
    else if(whichOperation=="multiply")
        return parseInt(a) * parseInt(b)
    else if(whichOperation=="divide")
        return parseInt(a) / parseInt(b)

}
