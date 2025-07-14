let api = "https://api.github.com/users/"
let info = document.querySelector('.userInfo')

const getUserName = async (userName) => {
  const response = await fetch(api + userName)
  const data = await response.json()

  const card = `
    <div class="flex flex-col items-center gap-4 p-8 bg-white shadow-md rounded-lg max-w-md w-full">
      <div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
        <img src="${data.avatar_url}" alt="User Photo" class="w-full h-full object-cover">
      </div>
      <div class="text-center">
        <h1 class="text-xl font-semibold text-gray-800">${data.name || data.login}</h1>
        <ul class="flex justify-center gap-4 mt-2 text-sm text-blue-600">
          <li class="bg-blue-100 px-3 py-1 rounded">Followers: ${data.followers}</li>
          <li class="bg-blue-100 px-3 py-1 rounded">Following: ${data.following}</li>
          <li class="bg-blue-100 px-3 py-1 rounded">Repos: ${data.public_repos}</li>
        </ul>
        <div class="mt-4">
          <a href="${data.html_url}" target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  `
  info.innerHTML = card
}

let submit = () => {
  const search = document.querySelector('.input')
  if (search.value !== "") {
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
