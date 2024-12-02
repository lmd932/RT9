// Récupérer les produits du panier depuis le localStorage
const panier = JSON.parse(localStorage.getItem("panier")) || [];
const panierProduitsContainer = document.querySelector(".panier-produits");
const totalPrixElement = document.getElementById("total-prix");

// Fonction pour afficher les produits du panier
function afficherPanier() {
  panierProduitsContainer.innerHTML = "";

  if (panier.length === 0) {
    panierProduitsContainer.innerHTML = "<p>Votre panier est vide.</p>";
    totalPrixElement.textContent = "0,00 €";
    return;
  }

  let total = 0;

  panier.forEach((produit, index) => {
    const produitDiv = document.createElement("div");
    produitDiv.classList.add("panier-item");
    produitDiv.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}" style="width: 100px;">
      <div>
        <h3>${produit.nom}</h3>
        <p>${produit.prix}</p>
        <button class="btn-supprimer" onclick="supprimerProduit(${index})">Supprimer</button>
      </div>
    `;
    panierProduitsContainer.appendChild(produitDiv);

    // Ajouter au total
    total += parseFloat(produit.prix.replace("€", "").replace(",", "."));
  });

  totalPrixElement.textContent = total.toFixed(2).replace(".", ",") + " €";
}

// Fonction pour supprimer un produit du panier
function supprimerProduit(index) {
  panier.splice(index, 1); // Supprime le produit par index
  localStorage.setItem("panier", JSON.stringify(panier)); // Met à jour le localStorage
  afficherPanier(); // Réaffiche le panier
}

// Initialisation
afficherPanier();
