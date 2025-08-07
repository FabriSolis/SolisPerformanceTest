// Esperar que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  
  // Funcionalidad 1: Mensaje de bienvenida en clic en "Contáctanos"
  const contactoBtn = document.querySelector('.btn');
  if (contactoBtn) {
    contactoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Gracias por tu interés en Solis Performance. Nos pondremos en contacto contigo pronto.');
      // Opcional: redirigir después de unos segundos
      // setTimeout(() => {
      //   window.location.href = '#contacto';
      // }, 2000);
    });
  }

  // Funcionalidad 2: Mostrar un mensaje emergente al cargar la página
  alert('Bienvenido a Solis Performance: tu mecánica de confianza y rendimiento.');

  // Funcionalidad 3: Animación suave al desplazarse a las secciones (hash links)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Funcionalidad 4: Cambio de color en encabezados cuando la página se hace más larga
  window.addEventListener('scroll', () => {
    const headers = document.querySelectorAll('h2, h3');
    headers.forEach(header => {
      if (window.scrollY > 200) {
        header.style.color = '#ff0000'; // Rojo brillante
      } else {
        // Restaurar color si quieres
        if (header.tagName === 'H2') {
          header.style.color = '#e60000'; // Rojo oscuro
        } else if (header.tagName === 'H3') {
          header.style.color = '#e60000';
        }
      }
    });
  });

  // Funcionalidad 5: Función para mostrar un mensaje personalizado en botones
  const customBtns = document.querySelectorAll('.custom-alert');
  customBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('¡Gracias por confiar en Solis Performance!');
    });
  });

});

