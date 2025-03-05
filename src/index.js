function generatePoem(event){
    event.preventDefault();
    let text_imput = document.querySelector("#text_input");
    let poem = document.querySelector("#poem");
    poem.innerHTML = text_imput.value;

}

let form_element = document.querySelector("#form_elements");
form_element.addEventListener("submit", generatePoem)