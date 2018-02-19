<!doctype html>
<html lang="fr">

<?include 'head.php' ?>
<link rel="stylesheet" type="text/css" href="../CSS/GameProfile.css">

    <!-- Notre JavaScript -->
    <script type="text/javascript" src="js/script.js"></script>

  <body>
    <h1>Welcome to the game</h1>
        <div id="annonce"></div>

		<table onclick="nbrClic++;">
			<tr>
				<td id="case0" onclick= "myFunction(this, nbrClic);"></td>
				<td id="case1" onclick= "myFunction(this, nbrClic);"></td>
				<td id="case2" onclick= "myFunction(this, nbrClic);"></td>
			</tr>
			<tr>
				<td id="case3" onclick= "myFunction(this, nbrClic);"></td>
				<td id="case4" onclick= "myFunction(this, nbrClic);"></td>
				<td id="case5" onclick= "myFunction(this, nbrClic);"></td>
			</tr>
			<tr>
				<td id="case6" onclick= "myFunction(this, nbrClic);"></td>
				<td id="case7" onclick= "myFunction(this, nbrClic);"></td>
				<td id="case8" onclick= "myFunction(this, nbrClic);"></td>
			</tr>
		</table>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



  </body>
</html>