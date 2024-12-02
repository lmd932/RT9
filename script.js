// Liste des produits (exemple)
const produits = [
    {
      nom: "Pull Bikelife",
      description: "Un pull confortable et stylé pour les riders.",
      image: "DALL·E 2024-12-02 21.46.45 - A simple black hoodie design, back view. On the back, there is a large, centered 'RT9' logo in plain white text. The design is minimalist and clean, f.webp",
      prix: "39,99 €"
    },
    {
      nom: "T-shirt Bikelife",
      description: "T-shirt léger pour rouler avec style.",
      image: "DALL·E 2024-12-02 21.47.49 - A simple black T-shirt design, front view. On the front, there is a small 'RT9' logo in plain white text on the right side of the chest. Minimalist an.webp",
      prix: "29,99 €"
    },
    {
      nom: "Drapeau Bikelife",
      description: "Un drapeau pour montrer votre passion.",
      image: "images/drapeau.jpg",
      prix: "14,99 €"
    },
    {
      nom: "Cagoule Bikelife",
      description: "Protection stylée pour vos sessions.",
      image: "DALL·E 2024-12-02 21.47.56 - A simple black balaclava design. The balaclava features a small, minimalist 'RT9' logo in white, positioned prominently on the forehead. The design is.webp",
      prix: "19,99 €"
    },
  ];
  
  // Cible les éléments HTML
  const produitsContainer = document.querySelector('.boutique .produits');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const cartCountElement = document.getElementById('cart-count');
  
  let cartCount = 0;
  
  // Fonction pour afficher les produits
  function afficherProduits() {
    produits.forEach((produit) => {
      const produitDiv = document.createElement('div');
      produitDiv.innerHTML = `
        <img src="${produit.image}" alt="${produit.nom}">
        <h3>${produit.nom}</h3>
        <p>${produit.prix}</p>
      `;
  
      produitDiv.addEventListener('click', () => ouvrirModal(produit));
  
      produitsContainer.appendChild(produitDiv);
    });
  }
  
  // Fonction pour ouvrir la modale
  function ouvrirModal(produit) {
    modal.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}">
      <h3>${produit.nom}</h3>
      <p>${produit.description}</p>
      <p><strong>Prix : ${produit.prix}</strong></p>
      <button onclick="fermerModal()">Fermer</button>
      <button onclick="ajouterAuPanier()">Ajouter au panier</button>
    `;
  
    overlay.style.display = 'block';
    modal.style.display = 'block';
  }
  
  // Fonction pour fermer la modale
  function fermerModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
  }
  
  // Fonction pour ajouter un produit au panier
  function ajouterAuPanier() {
    cartCount++;
    cartCountElement.textContent = cartCount;
    fermerModal();
  }
  
  // Initialisation
  afficherProduits();
  
  // Naviguer vers la page panier au clic sur le panier
document.getElementById("cart").addEventListener("click", () => {
  window.location.href = "panier.html"; // Redirection vers panier.html
});

// Vérification de la liste panier
let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(produitId) {
  const produit = produits.find((p) => p.id === produitId);
  if (produit) {
    panier.push(produit); // Ajouter le produit à la liste
    localStorage.setItem("panier", JSON.stringify(panier)); // Mettre à jour le localStorage
    document.getElementById("cart-count").textContent = panier.length; // Mettre à jour l'indicateur du panier
    fermerModal(); // Fermer la modale
  } else {
    console.error("Produit introuvable :", produitId);
  }
}
