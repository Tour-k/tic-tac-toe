<!doctype html>
<html lang="fr">

<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- CSS profile -->
	<link rel="stylesheet" type="text/css" href="../CSS/GameProfile.css">

    <!-- Police Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display" rel="stylesheet">

   

    <title>Morpion Ninja - Start the game</title>
  </head>
  <body>
    <h1>Welcome to the game</h1>
    	<div id="annonce"></div>
		<table onclick="nbrClic++; testAlignement(Morpion, player1, player2); annonce2(nbrClic, player);">
			<tr>
				<td id="case0" onclick= "myFunction(this, nbrClic, 0);"></td>
				<td id="case1" onclick= "myFunction(this, nbrClic, 1);"></td>
				<td id="case2" onclick= "myFunction(this, nbrClic, 2);"></td>
			</tr>
			<tr>
				<td id="case3" onclick= "myFunction(this, nbrClic, 3);"></td>
				<td id="case4" onclick= "myFunction(this, nbrClic, 4);"></td>
				<td id="case5" onclick= "myFunction(this, nbrClic, 5);"></td>
			</tr>
			<tr>
				<td id="case6" onclick= "myFunction(this, nbrClic, 6);"></td>
				<td id="case7" onclick= "myFunction(this, nbrClic, 7);"></td>
				<td id="case8" onclick= "myFunction(this, nbrClic, 8);"></td>
			</tr>
		</table>
    <!-- Optional JavaScript -->
 <!-- Notre JavaScript -->

    <script type="text/javascript" src="js/script.js">
/*il vaut mieux mettre le javascript en fin de page html, juste avant la fermeture de body. 
Comme ça la page html peut se charger avant de charger le javascript. */
    </script>



    <!-- jQuery first, then Popper.js, then Bootstrap JS-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  </body>
</html>