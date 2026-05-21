const submit = document.querySelector("#submit");
const addedButtons = document.querySelector("#addedButtons");
const body = document.querySelector("body")

submit.addEventListener("click", () => {
    let bgColorValue = document.querySelector("#bgColorValue").value;
    if (bgColorValue) {
        let newBtn = document.createElement("button");
        newBtn.textContent = bgColorValue;
        newBtn.id = bgColorValue.toLowerCase();
        newBtn.className = "changeBgButton";
        newBtn.style.backgroundColor = bgColorValue
        
        addedButtons.append(newBtn);
        document.querySelector("#bgColorValue").value = "";
    }
});

addedButtons.addEventListener("click", (event) => {
    let bgValue = event.target.id;
    // alert(bgValue);
    body.style.backgroundColor = bgValue
});
