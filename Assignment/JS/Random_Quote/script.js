const quote = document.getElementById("quote")
const author = document.getElementById("author")
const newQuote = document.getElementById("newQuote")
const copy = document.getElementById("copy")
const twitterShare = document.getElementById("twitterShare")

async function getQuoteFromAPI() {
    const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    const data = await response.json()

    quote.textContent = `"${data["data"]["content"]}"`
    author.textContent = `${data["data"]["author"].toUpperCase()}`

}
getQuoteFromAPI()

newQuote.addEventListener("click", () => {
    getQuoteFromAPI()
})
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.textContent)
})
twitterShare.addEventListener("click", () => {
    const url = "https://x.com/intent/tweet?text=" + encodeURIComponent(quote.textContent);
    window.open(url, "_blank");
})