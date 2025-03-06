function write_poem(response){
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        cursor: " ",
        });
}

function call_ai(){
    let text_imput = document.querySelector("#text_input");
    let text = text_imput.value;
    if ((text !== "")&&(text!==" ")){
        let api_key = "8bb47a1aat7f98e60875f1b93o1d6a06";
        let prompt = `Write a short rhyming poem ${text} and separate each line, except the last one, with a <br>`;
        let context = "Be fun and concise. No more than 6 verses";
        let Ai_link  = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;
        axios.get(Ai_link).then(write_poem);
    } else {
        let poem_space =document.querySelector("#poem");
        poem_space.innerHTML = "You must submit a word";
    }
}

function generatePoem(event){
    event.preventDefault();
    call_ai();
}

let form_element = document.querySelector("#form_elements");
form_element.addEventListener("submit", generatePoem);