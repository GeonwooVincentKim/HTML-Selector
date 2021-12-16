const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    console.log(selected.innerHTML);
    if(selected.innerHTML.match("Select Video Category")) {
        selected.style.color = "#fff";
    }
});

// var getOptionValue = selected.innerHTML;
// console.log(getOptionValue.name);

optionsList.forEach(o => {
    var getOptionValue;
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        if(!(selected.innerHTML.match("Select Video Category"))) {
            selected.style.color = "#000";
        } 
        o.style.background = "rgba(104, 194, 121, 0.5)";
        o.style.borderBottom = "1px solid #ebebeb"
        o.style.fontWeight = "bold";
        optionsContainer.classList.remove("active");
    });
});

$(document).mouseup(function (e){
    optionsContainer.classList.remove("active");
    if(selected.innerHTML.match("Select Video Category")) {
        selected.style.color = "#999";
    } else {
        selected.style.color = "#000";
    }
});
