console.log(idPost);
console.log("hola");
 fetch(urlUpd)
   .then((response) => {
     // comprobamos que el estatus de la respuesta es falso
     if (!response.ok) {
       // si si, lanzamos un error con un mensaje
       throw new Error(
         `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
       );
     } else {
       // sino, retornamos la respuesta al siguiente then
       return response.json();
     }
   })
   .then((response) => {
     console.log(response);
     let templateCI = "";     
     //let { author, age, biography, bootcamp } = response;
     // pintar esa informacion en el formulario
     if (response) {
         console.log(response)
       let { title, author, content, tags, urlCoverImage, avatarAuthor } = response;
       // pintar esa informacion en el formulario   
  
       document.getElementById("authorPost").innerHTML  = author;
       document.getElementById("titlePost").innerHTML = title;
       document.getElementById("content").innerHTML = content;

       templateCI = `<img src="${urlCoverImage}" alt="No picture found" />`
       document.getElementById("cover-image").innerHTML = templateCI;
       templateCI = `<img src="${avatarAuthor}" alt="No picture found" />`;
       document.getElementById("avatar-image").innerHTML = templateCI;
       document.getElementById("avatar-image-sb").innerHTML = templateCI;
       document.getElementById("authorPostSB").innerHTML = author;
       document.getElementById("more-from").innerHTML = author;

    
    
   
     } else {
       alert("Usuario no existente");
     }
   })
   .catch((err) => {
     console.log(err);
   });


   
let btnActualizar = document.getElementById("updatePost");
btnActualizar.addEventListener("click", () => {
    window.location.pathname = "./updatePost.html"
})
