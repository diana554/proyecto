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
        { text: "Inicio", href: "#inicio" },
        { text: "Habilidades", href: "habilidades.html" },
        { text: "Proyectos", href: "proyectos.html" },
        { text: "Contacto", href: "#contacto" }
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

