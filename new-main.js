const check_selected = document.querySelector(".check-selected");
const new_optionsContainer = document.querySelector(".new-options-container");

const new_optionsList = document.querySelectorAll(".option");

check_selected.addEventListener("click", () => {
    new_optionsContainer.classList.toggle("new-active");
    console.log(check_selected.innerHTML);
    
    if(check_selected.innerHTML.match("Default"))
        check_selected.style.color = "#fff";
});

new_optionsList.forEach(o => {
    o.addEventListener("click", (e) => {
        check_selected.innerHTML = o.querySelector("label").innerHTML;
        if(!(check_selected.innerHTML.match("Select Video Category"))) {
            check_selected.style.color = "#707070";
        }

        const previousState = document.querySelector(".option.check-selected");
        if(previousState) previousState.classList.remove("check-selected");
        e.currentTarget.classList.add("check-selected");

        new_optionsContainer.classList.remove("new-active");
    });
});

$(document).mouseup(function (e){
    new_optionsContainer.classList.remove("new-active");
    if(check_selected.innerHTML.match("Select Video Category")) {
        check_selected.style.color = "#999";
    } else {
        check_selected.style.color = "#707070";
    }
});

