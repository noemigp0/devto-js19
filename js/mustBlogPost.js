console.log(idPost)


const showPost = (objPost) => {
    // console.log(objPost)
    let postTemplate = `
    ${objPost.content}
    `
document.getElementById("test").innerHTML = postTemplate

}

fetch(`https://koder19g-ngp-default-rtdb.firebaseio.com/posts/${idPost}.json`)
//     https://koder19g-ngp-default-rtdb.firebaseio.com/posts/-N4nurx34Ld6lt-OZkTO
  .then((response) => {
    // console.log(response)
    if (!response.ok) {
      throw new Error(
        `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}` // si si, lanzamos un error con un mensaje
      );
    } else {
      return response.json(); // sino, retornamos la respuesta al siguiente then
    }
  })
  .then((response) => {
    //console.log(response);
    showPost(response);
  });