let comment = document.querySelector("#comment")
let list = JSON.parse(localStorage.getItem("posts")) || []

list.map(item => p.innerHTML += `<p>${item}</p>`)