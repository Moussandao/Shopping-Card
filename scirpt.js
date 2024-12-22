var produit=document.getElementsByClassName('box');



for(let i=0;i<produit.length;i++){
    /**Recuperer le btn Plus** */
    let btnPlus=produit[i].children[4].children[2];
    let total=produit[i].children[3].children[1];
    /**nombre de produit** */
    let nbr=produit[i].children[4].children[1];
    let qty=parseInt(nbr.innerText);
    /**Prix unitaire */
    let prixU=produit[i].children[2].children[1];
    let prixunitaire=parseInt(prixU.innerText);
    /****commande total */

      /**Evenement a ajouter sur le bouton plus**/
    btnPlus.addEventListener('click',function(){
        qty++
        nbr.innerText=qty;
        total.innerText=prixunitaire*qty;
        Calcultotal();
    })
      /**Evenement a ajouter sur le bouton moins **/
    let btnmoins=produit[i].children[4].children[0];
    btnmoins.addEventListener('click',function(){
        if(qty===0){
            btnmoins.stopPropagation();
        }else{
            qty--;
            total.innerText--;
        }
        nbr.innerText=qty;
        total.innerText=prixunitaire*qty;
        Calcultotal();

})
    /****Evenement pour changer la couleur du bouton like **/
   let btnheart=produit[i].children[5].children[0].children[0];
   btnheart.addEventListener('click',function(){
            if(btnheart.style.color==='black'){
                btnheart.style.color='red';
            }else{
                btnheart.style.color='black';
            }
   })
   /****supprimer des produits du panier **/
   let btndelete=produit[i].children[5].children[1].children[0];
     btndelete.addEventListener('click',()=>{
         produit[i].remove();
     }) 
     
}
  // Calcul commande total
  let totalsomme=document.getElementById("tyu")
     function Calcultotal(){

       let somme=0
     let totalCommande=document.getElementsByClassName('price')
     for(let i=0;i<totalCommande.length;i++){
      let tot=parseInt(totalCommande[i].innerText);
      somme=somme+tot;
     }
     totalsomme.innerText=somme 
        
     }
  