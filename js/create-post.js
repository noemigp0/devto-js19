// Create Koder
console.log("SU codigo para crear un koder aquí");
let btnEnviar = document.getElementById("sendPost");
btnEnviar.addEventListener("click", () => {
  // obtener la data
  let usuario = document.getElementById("usuario").value;
  let imagen = document.getElementById("cover-image").value;
  let titulo = document.getElementById("titulo").value;
  let etiqueta = document.getElementById("etiqueta").value;
  let contenido = document.getElementById("contenido").value;
  let imagenAvatar = document.getElementById("imagen-avatar").value;
  console.log(usuario, imagen, titulo, etiqueta, contenido, imagenAvatar);
  // validar la data
  if (
    usuario === "" ||
    imagen === "" ||
    titulo === "" ||
    etiqueta === "" ||
    contenido === "" ||
    imagenAvatar === ""
  ) {
    // alert("Campos vacios");

    alert("Whoops, salió mal: ningún campo debe estar vacío", "danger");
  } else {
    // formar el nuevo koder
    let newPost = {
      title: titulo,
      content: contenido,
      tags: etiqueta,
      urlCoverImage: imagen,
      author: usuario,
      createdDate: "17/06/2022",
      mintoread: parseInt(Math.random() * 1000),
      reactions: parseInt(Math.random() * 1000),
      comments: parseInt(Math.random() * 1000),
      reference: "link",
      avatarAuthor: imagenAvatar,
    };
    console.log(newPost);
    fetch("https://koder19g-ngp-default-rtdb.firebaseio.com/posts/.json", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
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
// hacer el envio
/*
    const httpXHR = new XMLHttpRequest()
    httpXHR.onload = (response) => {
      if(response.target.status >= 200 && response.target.status <= 399) {
        let responseFirebase = JSON.parse(response.target.response)
        console.log(responseFirebase)
        alert(`Koder registrado exitosamente con el id ${responseFirebase.name} `)
      }
    }
    httpXHR.open('POST', 
    'https://koders19gjs-default-rtdb.firebaseio.com/koders/.json', true)
    console.log(httpXHR)
    // enviar 
    // texto plano NOtacion de JSON
    // console.log(JSON.stringify(newKoder))
    httpXHR.send( JSON.stringify(newKoder) )
  }
} )
*/
/*
let newKoder = {
    age: "32",
    biography: "Lorem ipsum",
    bootcamp: "Js",
    name: "Francisco"
}
*/
