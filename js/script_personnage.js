
var valeurtest=true;
function process(test) {
	if (test==1) {
		valeurtest=true;
	} else {
		valeurtest=false;	
	}
	
}

function perso(i) {
	var personnages = ['Pat Tchouli', 'Mar Maïe', 'Hedi Dong', 'Pag Aïe'];

    var indicationchoixplayer1=document.createTextNode(personnages[i]);
    var indicationchoixplayer2=document.createTextNode(personnages[i]);
    
    if (valeurtest) {
   	 	var choixplayer1 = document.getElementById('choixplayer1');
    	var remove2=choixplayer1.lastChild;
    	choixplayer1.removeChild(remove2);
    	choixplayer1.appendChild(indicationchoixplayer1);


    } else {
    	var choixplayer2 = document.getElementById('choixplayer2');
    	var remove2=choixplayer2.lastChild;
    	choixplayer2.removeChild(remove2);
    	choixplayer2.appendChild(indicationchoixplayer2);

    	var nameplayer2=document.getElementById('nameplayer2');
    	nameplayer2.appendChild(indicationchoixplayer2);
    } 

    }

function envoi_nom() {
    var nameplayer1=document.getElementById('nameplayer1');
    	nameplayer1.appendChild(indicationchoixplayer1);

	var nameplayer2=document.getElementById('nameplayer2');
    	nameplayer2.appendChild(indicationchoixplayer2);
}
