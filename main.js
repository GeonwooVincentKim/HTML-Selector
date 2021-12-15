const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
const container = document.querySelector(".container");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  console.log(selected.innerHTML);
  if(selected.innerHTML.match("Select Video Category")) {
    selected.style.color = "#fff";
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    if(!(selected.innerHTML.match("Select Video Category"))) {
      selected.style.color = "#000";
    }
    optionsContainer.classList.remove("active");
  });
});

$(document).mouseup(function (e){
  optionsContainer.classList.remove("active");
  selected.style.color = "#000";
});
