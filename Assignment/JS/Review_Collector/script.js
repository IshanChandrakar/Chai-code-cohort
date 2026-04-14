let starRating;

// storing star rating by the user
document.querySelector("#star-container").addEventListener("click", (event) => {
    starRating = parseInt(event.target.id);
    document.getElementById("rating-value").textContent =
        `Rating : ${starRating}/5`;
});

// when user clicks submit button, the text from form is taken and in reviews section it is added
document.querySelector("#submit").addEventListener("click", () => {
    let form = document.querySelector("#form").value;

    // add contents in div tag
    let addedReview = document.createElement("div");
    addedReview.textContent = form;

    let starReviews = "";
    for (let i = 1; i <= starRating; i++) {
        starReviews += "⭐";
    }
    const starSection = document.createElement("div");
    starSection.textContent = starReviews;

    addedReview.appendChild(starSection);

    document.querySelector(".reviews").appendChild(addedReview);

    document.getElementById("rating-value").textContent = `Rating : 0/5`;
    document.querySelector("#form").value = ""
});
