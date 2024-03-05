
let form = document.querySelector("form");
let input = document.querySelector(".input");
let card_1 = document.querySelector(".card-1");
let card_2 = document.querySelector(".card-2");
let invalidMessage = document.querySelector(".invalid")
let dismissBtn = document.querySelector(".dismissBtn");
let copyEmail = document.querySelector(".copyEmail");

form.addEventListener("submit", submitEmail);
dismissBtn.addEventListener("click", toggleCards);

function toggleCards() {
    card_1.classList.toggle("hide");
    card_2.classList.toggle("hide");
    card_2.classList.toggle("add");
}

function validEmail(email) {
   return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function submitEmail(e) {
    e.preventDefault();

    if (validEmail(input.value)) {
        toggleCards();
        copyEmail.innerHTML = input.value;
        input.value = "";
    } else {
        invalidMessage.classList.toggle("hide");
        input.classList.toggle("invalidInput");
    }
}







                                        // MY SOLUTION
// function checkValidMail(e) {
// e.preventDefault()
    
//     if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value)) {
//         card_1.classList.toggle("hide");
//         card_2.classList.toggle("hide");
//         card_2.classList.toggle("add");
//         copyEmail.innerHTML = input.value;
//         input.value = "";
//     } else {
//         invalidMessage.classList.toggle("hide");
//         input.classList.toggle("invalidInput");
//     }
// }














