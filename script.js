/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if(scriptBtn){
scriptBtn.addEventListener("click", generateScript);
}

function generateScript(){
  var their = document.getElementById("their").value;
  var disasters = document.getElementById("disasters").value;
  var course = document.getElementById("course").value;

  displayScript.innerHTML = their + ", have you experienced any natural disasters before? I have experienced natural disasters, including " + disasters + ". Due to this, I decided to take action to be prepared by taking a course through Climate Resilient Youth, a youth-led project bridging climate inequity gaps through education and technology. I believe that you would learn a lot about preparedness by taking the '" + course + "' course. Let's take action and spread awareness about effects of climate change today!";
}
