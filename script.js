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

 

  // Funcionalidad 5: Función para mostrar un mensaje personalizado en botones
  const customBtns = document.querySelectorAll('.custom-alert');
  customBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('¡Gracias por confiar en Solis Performance!');
    });
  });

});


