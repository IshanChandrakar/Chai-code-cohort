const changeBgButton = document.querySelector("#changeBgButton")

let changeBgColor = "white"

changeBgButton.addEventListener("click", ()=>{
    if(changeBgColor=="white"){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        changeBgColor = "black"
    }
    else{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        changeBgColor = "white"
        
    }

})