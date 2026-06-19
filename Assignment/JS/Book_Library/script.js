const bookList = document.getElementById("bookList")
const titleArray = []
const authorArray = []
const publishedDateArray = []
const booksArray = []
async function getBookDetails() {
    const response = await fetch("https://api.freeapi.app/api/v1/public/books")
    const data = await response.json()
    const bookDetailsArray = data["data"]["data"]
    let bookId = 0
    bookDetailsArray.forEach(book => {
        let bookContainer = document.createElement("div")
        bookContainer.classList.add("bookContainer")
        let imageContainer = document.createElement("div")
        imageContainer.classList.add("imageContainer")
        
        let bookLink = document.createElement("a")
        bookLink.href = `${book["volumeInfo"]["infoLink"]}`
        bookLink.setAttribute("target","_blank")

        let bookImg = document.createElement("img")
        bookImg.classList.add("bookImg")
        bookImg.src = `${book["volumeInfo"]["imageLinks"]["smallThumbnail"]}`
        bookLink.appendChild(bookImg)
        
        imageContainer.appendChild(bookLink)
        bookContainer.appendChild(imageContainer)

        let bookDetails = document.createElement("div")
        bookDetails.classList.add("bookDetails")
        let title = document.createElement("p")
        title.classList.add("title")
        title.textContent = `${book["volumeInfo"]["title"]}`
        titleArray.push(book["volumeInfo"]["title"])

        let author = document.createElement("p")
        author.classList.add("author")
        author.textContent = `By: ${book["volumeInfo"]["authors"]}`
        authorArray.push(book["volumeInfo"]["authors"])

        let publisher = document.createElement("p")
        publisher.classList.add("publisher")
        publisher.textContent = `${book["volumeInfo"]["publisher"]}`

        let publishedDate = document.createElement("p")
        publishedDate.classList.add("publishedDate")
        publishedDate.textContent = `${book["volumeInfo"]["publishedDate"]}`
        publishedDateArray.push(book["volumeInfo"]["publishedDate"])

        bookDetails.append(title, author, publisher, publishedDate)

        bookContainer.append(imageContainer, bookDetails)
        bookContainer.setAttribute("id", bookId)
        booksArray.push(bookContainer)

        bookList.append(bookContainer)
        bookId++
    })

}
getBookDetails()

const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", () => {
    let searchInput = document.getElementById("searchInput")
    searchInput = searchInput.value
    if (searchInput) {
        for (let i = 0; i < titleArray.length; i++) {
            if (titleArray[i].includes(searchInput)) {
                let searchedBook = document.getElementById(i)
                document.getElementById("bookList").replaceChildren()
                document.getElementById("bookList").append(searchedBook)
            }
        }
        for (i = 0; i < authorArray.length; i++) {
            for (let j = 0; j < authorArray[i].length; j++) {
                if (authorArray[i][j].includes(searchInput)) {
                    let searchedBook = document.getElementById(i)
                    document.getElementById("bookList").replaceChildren()
                    document.getElementById("bookList").append(searchedBook)
                }
            }
        }
    }
})

const displayStyle = document.getElementById("displayStyle")
displayStyle.addEventListener("change", (event) => {
    let selection = event.target.value
    if (selection == "grid") {
        bookList.classList.remove("list")
        bookList.classList.add("grid")
    }
    if (selection == "list") {
        bookList.classList.remove("grid")
        bookList.classList.add("list")
    }
})
const newSortedBooks = []
const sortBooks = document.getElementById("sortBooks")
sortBooks.addEventListener("change", (event) => {
    let sortSelection = event.target.value
    if (sortSelection == "title") {
        titleArray.sort()
        titleArray.forEach(bookTitle => {
            booksArray.forEach(individualBook => {
                if (bookTitle == individualBook.querySelector(".title").textContent)
                    newSortedBooks.push(individualBook)
            })
        })
        bookList.replaceChildren()
        newSortedBooks.forEach(book => {
            bookList.append(book)
        })

    }
    if (sortSelection == "publishedDate") {
        publishedDateArray.sort()
        publishedDateArray.forEach(publicationDate => {
            booksArray.forEach(individualBook => {
                if (publicationDate == individualBook.querySelector(".publishedDate").textContent)
                    newSortedBooks.push(individualBook)
            })
        })
        bookList.replaceChildren()
        newSortedBooks.forEach(book => {
            bookList.append(book)
        })
    }
    if (sortSelection == "none") {
        bookList.replaceChildren()
        booksArray.forEach(book=>{
            bookList.appendChild(book)
        })
    }
})