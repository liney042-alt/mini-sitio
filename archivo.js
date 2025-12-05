const planetas = [
  {
    nombre: 'Mercurio',
    detalle: 'Es el planeta más cercano al Sol y el más pequeño.',
  },
  {
    nombre: 'Venus',
    detalle: 'Tiene una atmósfera extremadamente densa y caliente.',
  },
  {
    nombre: 'Tierra',
    detalle: 'Nuestro hogar, único planeta conocido con vida.',
  },
  {
    nombre: 'Marte',
    detalle: 'Conocido como el planeta rojo por su superficie oxidada.',
  },
  { nombre: 'Júpiter', detalle: 'El planeta más grande del sistema solar.' },
  { nombre: 'Saturno', detalle: 'Famoso por sus majestuosos anillos.' },
];

const contenedor = document.getElementById('planetas');

planetas.forEach((p) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
        <h3>${p.nombre}</h3>
        <p>${p.detalle}</p>
    `;

  contenedor.appendChild(card);
});
 feat/contacto-v5

// ----- js contacto -----
document.addEventListener('DOMContentLoaded', function () {


// js/contact.js
document.addEventListener('DOMContentLoaded', function () {
 main
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', function (e) {
 feat/contacto-v5
    e.preventDefault();

    feedback.style.display = 'block';
    feedback.textContent = 'Mensaje enviado correctamente 😊';
    feedback.classList.add('success');

    // limpiar campos
    form.reset();

    // ocultar mensaje a los 3 segundos
    let hideTimeout;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // mostrar feedback
      feedback.style.display = 'block';
      feedback.textContent = 'Mensaje simulado enviado. Gracias 😊';
      feedback.classList.add('success');

      // limpiar timeout anterior
      if (hideTimeout) clearTimeout(hideTimeout);

      // ocultar después de 3 segundos
      hideTimeout = setTimeout(() => {
        feedback.style.display = 'none';
      }, 3000);

      form.reset();
    });
  form.reset();
});

    e.preventDefault(); // sin backend, evitamos reload
    feedback.style.display = 'block';
    feedback.textContent = 'Mensaje simulado enviado. Gracias 😊';
    feedback.style.color = 'green';
    // opcional: limpiar campos
    form.reset();
 main
  });
});
