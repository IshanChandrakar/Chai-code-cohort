const youtubeVideoList = document.querySelector("#youtubeVideoList")
const titleArray = []
async function showContent() {
    const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos')
    const data = await response.json()

    const fetchedData = data["data"]["data"];

    for (let i = 0; i < fetchedData.length; i++) {
        let videoContainer = document.createElement("div")
        videoContainer.classList.add("videoContainer")

        let thumbnailContainer = document.createElement("div")
        thumbnailContainer.classList.add("thumbnailContainer")

        let videoLink = document.createElement("a")
        videoLink.classList.add("videoLink")
        videoLink.setAttribute("target", "_blank")

        let thumbnail = document.createElement("img")
        thumbnail.classList.add("thumbnail")

        let videoDetails = document.createElement("div")
        videoDetails.classList.add("videoDetails")

        let title = document.createElement("div")
        title.classList.add("title")

        let channelLink = document.createElement("a")
        channelLink.classList.add("channelLink")
        channelLink.setAttribute("target", "_blank")
        channelLink.href = `https://www.youtube.com/channel/${fetchedData[i]["items"]["snippet"]["channelId"]}`

        let channelName = document.createElement("div")
        channelName.classList.add("channelName")
        channelLink.appendChild(channelName)

        let uploadTime = document.createElement("div")
        uploadTime.classList.add("uploadTime")


        thumbnail.src = `${fetchedData[i]["items"]["snippet"]["thumbnails"]["medium"]["url"]}`
        videoLink.href = `https://www.youtube.com/watch?v=${fetchedData[i]["items"]["id"]}`
        videoLink.appendChild(thumbnail)
        thumbnailContainer.appendChild(videoLink)

        let views = Number(fetchedData[i]["items"]["statistics"]["viewCount"])
        if (views >= 1000) {
            views = `${(views / 1000).toFixed(1)}K`
        }
        let now = new Date()
        let videoPublishedAt = new Date(fetchedData[i]["items"]["snippet"]["publishedAt"])
        let timeDifference = Math.floor((now - videoPublishedAt) / (1000 * 60 * 60 * 24 * 365))

        title.textContent = `${fetchedData[i]["items"]["snippet"]["title"]}`
        titleArray.push(`${fetchedData[i]["items"]["snippet"]["title"]}`)
        channelName.textContent = `${fetchedData[i]["items"]["snippet"]["channelTitle"]}`
        uploadTime.textContent = `${views} views • ${timeDifference} years ago`
        videoDetails.appendChild(title)
        videoDetails.appendChild(channelLink)
        videoDetails.appendChild(uploadTime)

        videoContainer.appendChild(thumbnailContainer)
        videoContainer.appendChild(videoDetails)

        youtubeVideoList.appendChild(videoContainer)
    }
}

showContent()

const submit = document.querySelector("#submit")
submit.addEventListener("click", () => {
    const searchInput = document.querySelector("#searchInput").value.toLowerCase()
    if (searchInput) {
        for (let i = 0; i < titleArray.length; i++) {
            titleArray[i] = titleArray[i].toLowerCase()
            if (youtubeVideoList.children[i].classList.contains("searched"))
                youtubeVideoList.children[i].classList.remove("searched")
            if (titleArray[i].includes(searchInput)) {
                youtubeVideoList.children[i].classList.add("searched");

            }
        }
    }
})