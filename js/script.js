
// récupérer le nom des joueurs 
var player1 =prompt('Joueur 1 entrez votre nom'); 
var player2 =prompt('Joueur 2 entrez votre nom');
var nbrClic = 0, player;

//Tableau de valeur, joueur 1 : X, joueur 2 : O 
Morpion = new Array(9);
        

//on récupère le nom du personnage 
//joeur 1 
function user1(){
    var textuser=document.getElementById('textuser')
    var selectionUser = document.createTextNode('Player n°1, choose your caracter :')
};

function user2(){
    var textuser=document.getElementById('textuser')
    var selectionUser = document.createTextNode('Player n°2, choose your caracter :')
};




//ces fonctions annoncent le nom du joueur à chaques tours
function annonce1 () {
    var textannonce1=document.createTextNode(player1 +' doit jouer');
    annonce.appendChild(textannonce1);
}
        
    annonce1();

function annonce2 (nbrClic) { 

    var textannonce3=document.createTextNode(player1 +' doit jouer');
    var textannonce2=document.createTextNode(player2 +' doit jouer');

    if (nbrClic%2==0){
        var annonce=document.querySelector('#annonce');
        var remove1=annonce.lastChild;
        annonce.removeChild(remove1);
        annonce.appendChild(textannonce3); 
    } else if(nbrClic%2!==0){
        var annonce=document.querySelector('#annonce');
        var remove1=annonce.lastChild;
        annonce.removeChild(remove1);
        annonce.appendChild(textannonce2);  
    }
}



//Cette fonction teste l'alignement des valeur X et O dans le tableau Morpion
        function testAlignement(Morpion, player1, player2) {
            if(Morpion[0]+Morpion[1]+Morpion[2]=="XXX"||Morpion[3]+Morpion[4]+Morpion[5]=="XXX"||Morpion[6]+Morpion[7]+Morpion[8]=="XXX"||Morpion[0]+Morpion[3]+Morpion[6]=="XXX"||Morpion[1]+Morpion[4]+Morpion[7]=="XXX"||Morpion[2]+Morpion[5]+Morpion[8]=="XXX"||Morpion[0]+Morpion[4]+Morpion[8]=="XXX"||Morpion[2]+Morpion[4]+Morpion[6]=="XXX") {
                alert(player1 + ' gagne la partie');
                window.location.reload();
            }
            else if (Morpion[0]+Morpion[1]+Morpion[2]=="OOO"||Morpion[3]+Morpion[4]+Morpion[5]=="OOO"||Morpion[6]+Morpion[7]+Morpion[8]=="OOO"||Morpion[0]+Morpion[3]+Morpion[6]=="OOO"||Morpion[1]+Morpion[4]+Morpion[7]=="OOO"||Morpion[2]+Morpion[5]+Morpion[8]=="OOO"||Morpion[0]+Morpion[4]+Morpion[8]=="OOO"||Morpion[2]+Morpion[4]+Morpion[6]=="OOO") {
                alert(player2 + ' gagne la partie');
                window.location.reload();
            }
            else {
            }
        }


//Cette fonction change la couleur de fond des cases en fonction du nbr de clics
        function myFunction (id, nbrClic, caseid) {

            if(nbrClic<=8) { 
                if(nbrClic%2==0){
                    id.style.backgroundColor= "red";
                    Morpion[caseid]= "X";
                } 
                else {
                    id.style.backgroundColor= "blue";
                    Morpion[caseid]= "O";
                }
            }
            else {
                alert ("La partie est terminée")
                window.location.reload();
            }
        } 

