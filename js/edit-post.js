console.log(idPost);
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
    let template = "";
    //let { author, age, biography, bootcamp } = response;
    // pintar esa informacion en el formulario
    if (response) {
      let { title, author, content, tags, urlCoverImage } = response;
      // pintar esa informacion en el formulario   

      document.getElementById("usuario").value = author;
      document.getElementById("imagen").value = urlCoverImage;
      document.getElementById("titulo").value = title;
      document.getElementById("etiqueta").value = tags;
      document.getElementById("contenido").value = content;
    } else {
      alert("Usuario no existente");
    }
  })
  .catch((err) => {
    console.log(err);
  });

let btnActualizar = document.getElementById("updatePost");
btnActualizar.addEventListener("click", () => {
  // obtener la data
  let author = document.getElementById("usuario").value
  let urlCoverImage = document.getElementById("imagen").value
  let title = document.getElementById("titulo").value
  let tags = document.getElementById("etiqueta").value
  let content = document.getElementById("contenido").value
  // validar la data
  if (author === "" || urlCoverImage === "" || title === "" || tags === "" || content === "" ) {
    alert("Campos vacios");
  } else {
    // formar el nuevo koder
    let postUpdated = {
        title: title ,
        content: content,
        tags: tags,
        urlCoverImage:urlCoverImage,
        author: author,
        createdDate: "17/06/2022",
        mintoread: parseInt(Math.random() * 1000) ,
        reactions: parseInt(Math.random() * 1000) ,
        comments: parseInt(Math.random() * 1000) ,
        reference: "./must-blog-post.html",
        avatarAuthor: "url",
    
}
    console.log(postUpdated);
    fetch(urlUpd,
      {
        method: "PATCH",
        body: JSON.stringify(postUpdated),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
        console.log(finalResponse);
      })
      .catch((err) => {
        console.log(error);
      });
    
  }
});
/**
 * Eliminar koder
 */
let btnEliminar = document.getElementById("deletePost");
btnEliminar.addEventListener("click", () => {
  fetch(urlUpd,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      // comprobamos que el estatus de la respuesta es falso
      if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        let err = new Error(
          `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
        );
        throw err;
      } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json();
      }
    })
    .then((response) => {
      console.log(response);
      window.location.pathname = "/index.html";
    })
    .catch((err) => {
      console.log(err);
    });
});