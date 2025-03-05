function generatePoem(event){
    event.preventDefault();
    alert("help");

}

let form_element = document.querySelector("#form_elements");
form_element.addEventListener("submit", generatePoem)