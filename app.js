// Escucha el evento de desplazamiento para el navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const contactButton = document.getElementById("contact-button");
  const navLinks = document.querySelectorAll("nav a");

  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-blue-600"); // Cambia a un color de fondo cuando se desplaza
    navLinks.forEach((link) => {});
    contactButton.classList.add("text-black");
  } else {
    navbar.classList.remove("bg-blue-600");
    navbar.classList.add("bg-transparent"); // Mantiene el fondo transparente
    navLinks.forEach((link) => {
      link.classList.remove("text-white"); // Cambia el color del texto según sea necesario
    });
    contactButton.classList.remove("text-white");
  }
});

// Selección de elementos
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Verificar modo oscuro en carga
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
} else {
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
}

// Cambiar modo al hacer clic
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");

  // Agregar animación de rotación
  if (document.body.classList.contains("dark")) {
    moonIcon.classList.add("rotate");
    setTimeout(() => moonIcon.classList.remove("rotate"), 500); // Remover clase después de la animación
  } else {
    sunIcon.classList.add("rotate");
    setTimeout(() => sunIcon.classList.remove("rotate"), 500); // Remover clase después de la animación
  }

  // Guardar el tema en localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
