// 1) Año automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// 2) Resalta en el menú la sección que se está viendo
const secciones = document.querySelectorAll("section");
const enlaces = document.querySelectorAll("nav a");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      enlaces.forEach((a) => {
        a.classList.toggle("activo", a.getAttribute("href") === "#" + entrada.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

secciones.forEach((s) => observador.observe(s));

// 3) Al hacer click en una cosa que me gusta, se marca o desmarca
document.querySelectorAll(".gustos li").forEach((item) => {
  item.addEventListener("click", () => item.classList.toggle("marcado"));
});
