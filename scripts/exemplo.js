// const element = document.getElementById("exemplo-get");
        // console.log("element ------>",element);
        // const novah1 = document.createElement('h1');
        // novah1.textContent = "nova coisa";
        // console.log("nova h1",novah1);
        // element.appendChild(novah1);
const buttonexemplojs = document.getElementById("button-exemplojs");
buttonexemplojs.addEventListener('click',() => {
    prompt("aaa cu")
});

const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("teste");
});

document.addEventListener("keydown", (event) => {
    console.log(`Tecla clicada`, (event.key))
})