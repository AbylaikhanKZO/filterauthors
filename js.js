let users = document.querySelector("#posts_auth")
fetch ('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json =>{
  for(items of json){
     posts_auth.innerHTML += `
      <a href = "<p> UserID: ${items.userId}"</a>

            <p> postName: ${items.body}</p>`
      
  }
})
