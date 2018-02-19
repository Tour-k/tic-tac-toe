// récupérer le nom des joueurs 
var player1 =prompt('joeur 1 entrez votre nom'); 
var player2 =prompt('joeur 2 entrez votre nom');


    	var nbrClic = 0, player;
       

    


    function annonce (nbrClic){

        if (nbrClic==0){
        player=player1;
        var annonce = document.getElementById('annonce');
        var textannonce = document.createTextNode('c\'est à '+player+' de jouer !');
        annonce.appendChild(textannonce);
    } else if (nbrClic%2==0) {
        player=player1;
        var annonce = document.getElementById('annonce');
        var textannonce = document.createTextNode('c\'est à '+player+' de jouer !');
        annonce.replaceChild(textannonce);
    } 
}

annonce();



    	function myFunction (id, nbrClic) {
    		
            if(nbrClic<=8) {
    			if(nbrClic%2==0){
					id.style.backgroundColor= "red";    
    			} 
    			else {
    				id.style.backgroundColor= "blue";   
    			}
    		}
    		else {
    			alert ("La partie est terminée")
    		}
           
		} 





/*function annonceplayer () {
    var annonce = document.getElementById('annonce');
    var textannonce = document.createTextNode('c\'est à '+player+' de jouer !');
    annonce.appendChild(textannonce);
} */
