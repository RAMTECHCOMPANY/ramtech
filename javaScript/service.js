var element = document.getElementById("toggle");
var links = document.getElementById("links");
element.addEventListener("click", function () {
   if (links.style.display === "block") {
      links.style.display = "none";
   }
   else {
      links.style.display = "block";
   }
});