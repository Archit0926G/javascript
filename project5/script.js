let api = "https://api.github.com/users/"

let info = document.querySelector('.userInfo')

const getUserName = async (userName) => {
    const response = await fetch(api + userName)
    const data = await response.json()
    console.log(data)

    const card = `
     <div class="userInfo">
        <div class="photo">
            <img src="${data.avatar_url}" alt="error">
        </div>
        <div class="info">
            <h1 class="name">${data.name || data.login}</h1>
            <ul>
                <li class="Follower">Follower : ${data.followers}</li>
                <li class="Following">Following : ${data.following}</li>
                <li class="Repos">Repos : ${data.public_repos}</li>
            </ul>
            <div class="gitLink">
                <a href="${data.html_url}" target="_blank">GitHub Profile</a>
            </div>
        </div>
    </div>`

    info.innerHTML = card
}



let submit = () => {
    const search = document.querySelector('.input')
    if (search.value != "") {
        getUserName(search.value)
    }
    return false 
}

getUserName('')

document.querySelector('.input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submit()
    }
})