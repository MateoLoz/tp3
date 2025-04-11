const handleproducts  = async () => {
    
    let nombre = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    let data = {
        nombre,
        precio
    }
     await fetch('http://localhost:3036/',{
    method: "POST", 
    body: JSON.stringify(data), 
    headers: {
    "Content-Type": "application/json",
  },
    }).then((res)=> console.log(res))
  
    listitems()
}



const form = document.getElementById('form').addEventListener('submit',async function (e) {
    e.preventDefault()

    await handleproducts()
})

const listitems = async () => {
    let div = document.getElementById('data')
    let data = await fetch('http://localhost:3036/').then((res)=> res.json()).then((res)=> {return res})
     for(let i = 0 ; i < data.length ; i++){
        let article = document.createElement('article')
        article.innerHTML = ` ${data[i].nombre} ${data[i].precio}`
        div.appendChild(article)
     }
}

window.addEventListener('load',listitems)