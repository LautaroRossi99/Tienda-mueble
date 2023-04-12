const contenedorPresentacionHTML = document.getElementById("contenedorPresentacion")
fetch("./database/vendedores.json")
    .then(response => response.json())
    .then(vendedores =>{
        for(const vendedor of vendedores){
            contenedorPresentacionHTML.innerHTML += `
            <div class = "card">
                <h2>VENDEDOR:</h2>
                <h2>${vendedor.name} </h2>
                <p>Edad: ${vendedor.years} </p>
                <p>Posición: ${vendedor.work} </p>
                <p>Cargo: ${vendedor.section} </p>
                <p>Pasion: Jugar Futbol</p>
                <img src=${vendedor.url}>
            </div>
            `
        }
    }) 
