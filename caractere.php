<!doctype html>
<html lang="fr">

<?php include 'head.php' ?>

  <body>
  	 
    <div class="container home"> 		    
  		<div class="row">
    		<div class="col-sm-6 White">
      			<h1>Select your </h1>
    		

            <div class="card-deck">
              <div class="card" onclick="perso(0)">
                <img class="card-img-top" src="../images/Tete_1_02.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Pat Tchouli</h5>
                  <p class="card-text">Rapide descriptif du personnage</p>
                </div>
              </div>
  
              <div class="card" onclick="perso(1);">
                <img class="card-img-top" src="../images/Tete_2_02.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Mar Maïe</h5>
                  <p class="card-text">Rapide descriptif du personnage</p>
                </div>
              </div>
            </div>

             </br></br> 

    <h1 ><button id="player1" onclick="process(1)" >Player 1</button>, you choose : </h1>
    <h1 ><button id="player1" onclick="process(2)" >Player 2</button>, you choose : </h1>

 

            
         </div>


        <div class="col-sm-6 Black">
   
      			<h1>Caracter</h1>
       
          <div class="card-deck">
              <div class="card" onclick="perso(2);">
                <img class="card-img-top" src="../images/Tete_1_02.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title" >Hedi Dong</h5>
                  <p class="card-text">Rapide descriptif du personnage</p>
                </div>
              </div>
      
            <div class="card" onclick="perso(3);">
              <img class="card-img-top" src="../images/Tete_2_02.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title" style="text-decoration-color:black;">Pag Aïe</h5>
                <p class="card-text">Rapide descriptif du personnage</p>
              </div>
        
            </div>
          </div>

        </br></br> 

              <h1 id="choixplayer1">???</h1>
              <h1 id="choixplayer2">???</h1>



        </div>
    		
        <div class="col-sm-12 Button">
   				<a href="game.php">  	
  					<button type="button" class="btn btn-outline-danger">START</button>
  				</a>
    		</div>
      </div>  		
    </div>
	
          


 <!-- Notre JavaScript -->

    <script type="text/javascript" src="js/script_personnage.js">


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>