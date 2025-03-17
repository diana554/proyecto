document.addEventListener("DOMContentLoaded", function () {
    const proyectos = [
        {
            titulo: "informativas",
            descripcion: "Paginas informativas",
            imagen: "./src/images/paginasinfo.png"
        },
        {
            titulo: "formularios",
            descripcion: "Formularios",
            imagen: "./src/images/formulario.png"
        },
        {
            titulo: "buscador",
            descripcion: "Buscador",
            imagen: "./src/images/buqueda.png"
        }
    ];

    const contenedor = document.getElementById("proyectos-container");

    proyectos.forEach(proyecto => {
        contenedor.innerHTML += `
            <div class="p-4 bg-deepBlue rounded-lg text-light text-center">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-40 object-cover rounded mb-2">
                <h3 class="text-xl font-bold">${proyecto.titulo}</h3>
                <p class="text-softGray">${proyecto.descripcion}</p>
            </div>
        `;
    });
});
