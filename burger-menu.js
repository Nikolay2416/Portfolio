let x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  let element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}

