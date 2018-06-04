var theDiv = document.getElementById("rootDiv");
var functionSwitch = true;

var theDiv = document.getElementById("rootDiv");

var functionSwitch = true;

 function changeStuff() {
     if(functionSwitch){
    
     var image1 = document.createElement("img");
     image1.src = "over.jpg";
     image1.style.width = "200px";
     image1.style.height = "200px";
     image1.style.textAlign = "center";
     theDiv.appendChild(image1);
     functionSwitch = false;
     }
    }