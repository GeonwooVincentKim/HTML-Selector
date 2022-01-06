const check_selected = document.querySelector(".check-selected");
const new_optionsContainer = document.querySelector(".new-options-container");

check_selected.addEventListener("click", () => {
    new_optionsContainer.classList.toggle("new-active");
    console.log(check_selected.innerHTML);
});
