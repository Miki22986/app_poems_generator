function write_poem(response){
    
}

function all_ai(){
    let api_key = "8bb47a1aat7f98e60875f1b93o1d6a06";
    let prompt = "Write a short rhyming poem";
    let context = "Be fun and concise. No more than 6 verses";
    let Ai_link  = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;
    axios.get(Ai_link).then(write_poem);
}

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