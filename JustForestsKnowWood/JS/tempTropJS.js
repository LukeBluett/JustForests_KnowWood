function myFunction(x,y) {
  			if (y.checked) 
  			{
  				document.getElementById('header').style.backgroundColor = 'blue';
      			document.getElementById('test2').style.backgroundColor = 'blue';
      			document.getElementById('test').style.display = "none";
      			document.getElementById('test2').style.display = "block";
  			} 
  			else 
  			{
  				document.getElementById('header').style.backgroundColor = 'red';
      			document.getElementById('test').style.backgroundColor = 'red';
      			document.getElementById('test').style.display = "block";
      			document.getElementById('test2').style.display = "none";
			}
		}