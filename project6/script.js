const api = "https://api.github.com/users/"
const infoBox = document.querySelector(".userInfo")
const input = document.querySelector("input")

const getUserInfo = async (username) => {
  try {
    const response = await fetch(api + username)
    if (!response.ok) throw new Error("User not found")
    
    const data = await response.json();

    const userCard = `
      <div class="flex flex-col items-center gap-4 p-8 bg-white shadow-md rounded-lg max-w-md w-full">
        <div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
          <img src="${data.avatar_url}" alt="User Photo" class="w-full h-full object-cover" />
        </div>
        <div class="text-center space-y-2">
          <h1 class="text-xl font-semibold text-gray-800">${data.name || data.login}</h1>
          <ul class="flex justify-center gap-4 text-sm text-blue-600">
            <li class="bg-blue-100 px-3 py-1 rounded">Followers: ${data.followers}</li>
            <li class="bg-blue-100 px-3 py-1 rounded">Following: ${data.following}</li>
            <li class="bg-blue-100 px-3 py-1 rounded">Repos: ${data.public_repos}</li>
          </ul>
          <a 
            href="${data.html_url}" 
            target="_blank" 
            class="inline-block bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    `

    infoBox.innerHTML = userCard;
  } catch (err) {
    infoBox.innerHTML = `
      <div class="bg-white p-6 rounded shadow text-center text-red-600">
        User not found. Please try again.
      </div>
    `
  }
}

const handleSearch = () => {
  const username = input.value.trim();
  if (username) {
    getUserInfo(username)
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch()
  }
})
