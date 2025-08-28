document.addEventListener("DOMContentLoaded", function () {
  const offcanvasEl = document.getElementById("offcanvasNavbar"); // id do seu menu
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

  // Para todos os links internos
  document.querySelectorAll('#offcanvasNavbar a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        offcanvas.hide(); // fecha o menu
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" }); // rola suave
        }, 300); // espera a animação do Bootstrap (~300ms)
      }
    });
  });

  // Quando clicar no X ou fora do menu → não faz nada além de fechar
});