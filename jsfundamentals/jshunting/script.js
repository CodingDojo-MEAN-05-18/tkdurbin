<!DOCTYPE html>
<html lang="en">
   <title>Js Hunting</title>
      <script src= "https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"></script>
        <script src="script.js">
          $(document).ready(function(){
            	$(document).on('click', '#display', function addName() {
                $.get("https://api.github.com/users/tkdurbin", displayName)
                // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
                function displayName(data) {
                  console.log(data.name);
        };
    });
      </script>
  <head>     
  </head>
  <body>
        <div id="page">
                <button id="display">Display Name</button>
            </div>
  </body>
</html>

/*

$.get("https://api.github.com/users/(... user name)", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)copy
function displayName(data) {
  console.log(data);
}

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
			$(document).on('click', '#display', function addName() {
				$.get("https://api.github.com/users/sethsondenaa", displayName);
				function displayName(data) {
	 				$('#page').append("<p>" + data.name + "</p>");
				}
	 		});
		});
  </script>
  */