<!DOCTYPE html>
<html lang="en">
   <title>Js Hunting</title>
      <script src= "https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"></script>
      <script src="script.js">
      $(document).ready(function(){
        var profile;

        $.get("https://api.github.com/users/tkdurbin", displayName)
         // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
        console.log(data);
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