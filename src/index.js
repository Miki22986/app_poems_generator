function generatePoem(event){
    event.preventDefault();
    let text_imput = document.querySelector("#text_input");
    let text = text_imput.value;
    new Typewriter('#poem', {
        strings: `${text}`,
        autoStart: true,
        cursor: " ",
        });
}

let form_element = document.querySelector("#form_elements");
form_element.addEventListener("submit", generatePoem);