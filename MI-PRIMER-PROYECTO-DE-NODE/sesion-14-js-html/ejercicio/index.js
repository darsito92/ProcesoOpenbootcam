const btn2 = document.getElementById("btn")
btn2.addEventListener("click", function() {
    alert("click en el botón")
  })

$(document).ready(function() {
    $("#btn").click(function() {
      console.log("Hola, estoy utilizando jQuery");
    });
  });
