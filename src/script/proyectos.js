document.addEventListener("DOMContentLoaded", function () {
    const proyectosContainer = document.getElementById("proyectos");
    
    const proyectos = [
        { nombre: "Páginas Informativas", imagen: "./src/images/paginasinfo.png" },
        { nombre: "Formularios", imagen: "./src/images/formulario.png" },
        { nombre: "Buscador", imagen: "./src/images/busqueda.png" }
    ];
    
    const grid = document.createElement("div");
    grid.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-6", "mt-6", "max-w-4xl", "mx-auto");
    
    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement("div");
        proyectoDiv.classList.add("p-4", "bg-deepBlue", "rounded-lg", "text-light", "flex", "flex-col", "items-center", "shadow-lg");
        
        const img = document.createElement("img");
        img.src = proyecto.imagen;
        img.classList.add("w-full", "h-full", "object-cover", "rounded", "mb-2");
        
        const titulo = document.createElement("h3");
        titulo.textContent = proyecto.nombre;
        titulo.classList.add("text-xl", "font-bold", "mt-2");
        
        proyectoDiv.appendChild(img);
        proyectoDiv.appendChild(titulo);
        grid.appendChild(proyectoDiv);
    });
    
    proyectosContainer.appendChild(grid);
});





document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    
    // Crear botón de menú para móviles
    const menuToggle = document.createElement("button");
    menuToggle.id = "menu-toggle";
    menuToggle.classList.add("md:hidden", "text-white");
    menuToggle.innerHTML = "☰";
    
    const nav = document.createElement("nav");
    nav.id = "menu";
    nav.classList.add("hidden", "md:block");
    
    const ul = document.createElement("ul");
    ul.classList.add("flex", "flex-col", "md:flex-row", "space-y-2", "md:space-y-0", "md:space-x-4", "text-center");
    
    const menuItems = [
        { text: "Inicio", href: "index.html" },
        { text: "Habilidades", href: "habilidades.html" },
        { text: "Proyectos", href: "proyectos.html" },
        { text: "Contacto", href: "index.html" }
    ];
    
    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text;
        a.classList.add("block");
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    header.appendChild(menuToggle);
    header.appendChild(nav);
    
    // Agregar funcionalidad de toggle para dispositivos móviles
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("hidden");
        menuToggle.classList.toggle("hidden");
    });

    // Cerrar menú cuando se seleccione una opción
    nav.addEventListener("click", function () {
        nav.classList.add("hidden");
        menuToggle.classList.remove("hidden");
    });
});