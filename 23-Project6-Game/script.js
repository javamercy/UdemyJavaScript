const word_el = document.getElementById("word");
const popup = document.getElementById("popup-container");
const messageElement = document.getElementById("success-message");
const wrongLetters_el = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");
const message = document.getElementById("message");
const playAgainBtn = document.getElementById("play-again");

let selectedWord = getRandomWord();

const correctLetters = [];
const wrongLetters = [];


function getRandomWord() {

    const words = ["javascript", "java", "python", "ruby", "php", "css", "html"];

    return words[Math.floor(Math.random() * words.length)];
}


function displayWord() {


    word_el.innerHTML = `
        ${selectedWord.split("").map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `).join("")}
    
    
    `;

    const w = word_el.innerText.replace(/\n/g,"");

    if(w === selectedWord){

        popup.style.display="flex";
        messageElement.innerText="Tebrikler Kazandınız!";
    }
}

function updateWrongLetters(){

    wrongLetters_el.innerHTML = `
    
        ${wrongLetters.length > 0 ? "<h3>Hatalı Harfler</h3>" : "" }
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach(function(item,index){
        const errorCount = wrongLetters.length;

        if(index<errorCount){
            item.style.display ="block";
        }else{
            item.style.display="none";
        }
    }); 

    if(wrongLetters.length === items.length){

        popup.style.display="flex";
        messageElement.innerText = "Maalesef Kaybettiniz!";
    }

    
}

function displayMessage(){
    message.classList.add("show");

    setTimeout(function(){
        message.classList.remove("show");
    },2000);
}

playAgainBtn.addEventListener("click",function(e){
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();

    displayWord();
    updateWrongLetters();

    popup.style.display ="none";
})

window.addEventListener("keydown",function(e){

    if(e.keyCode >= 65 && e.keyCode <= 90){

        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                 displayMessage();
                
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }
        }
    
    }
});

displayWord();