const bookList = document.getElementById("bookList")
async function getBookDetails(){
    const response = await fetch("https://api.freeapi.app/api/v1/public/books")
    const data = await response.json()
    const bookDetailsArray = data["data"]["data"]
    
    bookDetailsArray.forEach(book=>{
        let bookContainer = document.createElement("div")
        bookContainer.classList.add("bookContainer")
        let imageContainer = document.createElement("div")
        imageContainer.classList.add("imageContainer")
        let bookImg = document.createElement("img")
        bookImg.classList.add("bookImg")
        bookImg.src = `${book["volumeInfo"]["imageLinks"]["smallThumbnail"]}`
        imageContainer.appendChild(bookImg)
        bookContainer.appendChild(imageContainer)

        let bookDetails = document.createElement("div")
        bookDetails.classList.add("bookDetails")
        let title = document.createElement("p")
        title.classList.add("title")
        title.textContent = `${book["volumeInfo"]["title"]}`
        
        let author = document.createElement("p")
        author.classList.add("author")
        author.textContent = `${book["volumeInfo"]["authors"]}`

        let publisher = document.createElement("p")
        publisher.classList.add("publisher")
        publisher.textContent = `${book["volumeInfo"]["publisher"]}`
        
        let publishedDate = document.createElement("p")
        publishedDate.classList.add("publishedDate")
        publishedDate.textContent = `${book["volumeInfo"]["publishedDate"]}`

        bookDetails.append(title, author, publisher, publishedDate)
        
        bookList.append(bookContainer, bookDetails)
    })
    
}
getBookDetails()