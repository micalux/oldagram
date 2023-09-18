const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const nameEl = document.getElementById("name")
const locationEl = document.getElementById("location")
const avatarEl = document.getElementById("avatar")
const postEl = document.getElementById("post")
const commentEl = document.getElementById("comment")
const likesEl = document.getElementById("likes")
const usernameEl = document.getElementById("username")
const likeBtnEl = document.getElementById("like-btn")


function renderPost(item) {
    locationEl.textContent = posts[item].location
    nameEl.textContent = posts[item].name
    avatarEl.src = posts[item].avatar
    postEl.src = posts[item].post
    commentEl.textContent = posts[item].comment
    likesEl.textContent = posts[item].likes + " likes"
    usernameEl.textContent = posts[item].username
}


likeBtnEl.addEventListener("click", function() {
    let likesNumber = 0
    likesNumber =+ 1
    likesEl.textContent = parseInt(likesEl.textContent) + likesNumber + " likes"    
})

