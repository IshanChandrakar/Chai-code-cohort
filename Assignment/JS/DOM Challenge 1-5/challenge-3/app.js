/**
 * Write your challenge solution here
 */
let nameInput = document.querySelector("#nameInput");
let nameDisplay = document.querySelector("#nameDisplay");
nameInput.addEventListener("input", () => {
    if(nameInput.value == "")
        nameDisplay.textContent = "Not provided"
    else
    nameDisplay.textContent = nameInput.value;
});

let jobInput = document.querySelector("#jobInput");
let jobDisplay = document.querySelector("#jobDisplay");
jobInput.addEventListener("input", () => {
    if(jobInput.value == "")
        jobDisplay.textContent = "Not provided"
    else
    jobDisplay.textContent = jobInput.value;
});

let ageInput = document.querySelector("#ageInput");
let ageDisplay = document.querySelector("#ageDisplay");
ageInput.addEventListener("input", () => {
    
    if(ageInput.value == "")
        ageDisplay.textContent = "Not provided"
    else
        ageDisplay.textContent = ageInput.value; 
});

let bioInput = document.querySelector("#bioInput");
let bioDisplay = document.querySelector("#bioDisplay");
bioInput.addEventListener("input", () => {
    if(bioInput.value == "")
        bioInput.textContent = "Not provided"
    else
    bioDisplay.textContent = bioInput.value;
});
