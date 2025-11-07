const planetas = [
    { nombre: "Mercurio", detalle: "Es el planeta más cercano al Sol y el más pequeño." },
    { nombre: "Venus", detalle: "Tiene una atmósfera extremadamente densa y caliente." },
    { nombre: "Tierra", detalle: "Nuestro hogar, único planeta conocido con vida." },
    { nombre: "Marte", detalle: "Conocido como el planeta rojo por su superficie oxidada." },
    { nombre: "Júpiter", detalle: "El planeta más grande del sistema solar." },
    { nombre: "Saturno", detalle: "Famoso por sus majestuosos anillos." }
];

const contenedor = document.getElementById("planetas");

planetas.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${p.nombre}</h3>
        <p>${p.detalle}</p>
    `;

    contenedor.appendChild(card);
});
