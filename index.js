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


function renderPost() {
    for(let i = 0; i < posts.length; i++) {

        const mainEl = document.createElement("section")

        mainEl.innerHTML =
             `
             <div class="main-container">
                <header>
                    <img src="images/logo.png" alt="logo" class="logo">
                    <img src="images/user-avatar.png" alt="user-avatar" class="avatar">
                </header>

                <section>
                    <div class="user-info">
                        <img src="${posts[i].avatar}" class="avatar" id="avatar">
                        <div>
                            <p class="bold-text" id="name">${posts[i].name}</p>
                            <p id="location">${posts[i].location}</p>
                        </div>
                    </div>
                    <img src="${posts[i].post}" class="main-image" id="post">
                </section>

                <section class="bottom-section">
                    <div class="icons">
                        <img src="images/icon-heart.png" id="like-btn">
                        <img src="images/icon-comment.png">
                        <img src="images/icon-dm.png">
                    </div>
                    <p class="likes bold-text" id="likes">${posts[i].likes} likes</p>
                    <div class="user-comment">
                        <p class="bold-text" id="username">${posts[i].username}</p>
                        <p id="comment">${posts[i].comment}</p>
                    </div>
                </section>
            </div>
            `
            container.appendChild(mainEl)

            const likeBtnEl = mainEl.querySelector("#like-btn")
            likeBtnEl.addEventListener("click", function() {

            const likesEl = mainEl.querySelector("#likes")
            
            let likesNumber = 0
            likesNumber =+ 1
            likesEl.textContent = parseInt(likesEl.textContent) + likesNumber + " likes"        
    })
    }
}


renderPost()