const cards = document.querySelectorAll(".card");

[...cards].forEach((card) => {
  card.addEventListener("click", function (event) {
    // Vérifie si l'élément cliqué est un lien
    if (event.target.classList.contains("projectlinks")) {
      return;
    }
    // Basculer la classe "is-flipped" sur la carte parente
    card.classList.toggle("is-flipped");
  });
});
