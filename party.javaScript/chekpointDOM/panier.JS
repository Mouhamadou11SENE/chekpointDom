const para1 =document.querySelectorAll('panier');
  para1.onclick= function ajout(ajouter) {
    confirm('ce produit va etre ajouter au panier')
   
};
//cette partie sera applique dans tout  les cas pour les rajouter les produits au panier
// utilisons : onclick=confirm('')

function calc(nbr){
const b = 50
var nbr = document.getElementById('nbr').value;
 document.getElementById('montant').value= b*nbr;
}




