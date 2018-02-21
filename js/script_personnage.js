
var valeurtest=true;
function process(test) {
	if (test==1) {
		valeurtest=true;
	} else {
		valeurtest=false;	
	}
	
}

var nom1,nom2;
var personnages = ['Pat Tchouli', 'Mar Maïe', 'Hedi Dong', 'Pag Aïe'];


function perso(i) {
	

    var indicationchoixplayer1=document.createTextNode(personnages[i]);
    var indicationchoixplayer2=document.createTextNode(personnages[i]);
    
    if (valeurtest) {
   	 	var choixplayer1 = document.getElementById('choixplayer1');
    	var remove2=choixplayer1.lastChild;
    	choixplayer1.removeChild(remove2);
    	choixplayer1.appendChild(indicationchoixplayer1);
    	
    	nom1=personnages[i];

    } else {
    	var choixplayer2 = document.getElementById('choixplayer2');
    	var remove2=choixplayer2.lastChild;
    	choixplayer2.removeChild(remove2);
    	choixplayer2.appendChild(indicationchoixplayer2);

    	
    	nom2=personnages[i];
    } 

    }


	
    
function envoi_nom() {
	sessionStorage.setItem('nom1', nom1);
	sessionStorage.setItem('nom2', nom2);
}
    
