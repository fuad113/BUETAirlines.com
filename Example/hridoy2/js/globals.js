<!DOCTYPE html>
<html>

<head>
<script>
function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("img").src       = e.target.result;
      document.getElementById("b64").innerHTML = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  
}

document.getElementById("inp").addEventListener("change", readFile);
</script>

<body>
<input id="inp" type='file'>
<p id="b64"></p>
<img id="img" height="150">
</body>