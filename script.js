//#######################
//      SELECTOR
//#######################

const questions = document.querySelector(".questions");
const inputs    = document.querySelector("input");
let answer      = document.querySelector(".answer");
let body        = document.querySelector("body");

//#######################
//      FUNCTION
//#######################

inputs.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        let result = Math.floor(Math.random() * 4) // Get a random number for random result

        switch (result) {
            case 0:
                answer.textContent = "Peut être !";
                body.style.background = "linear-gradient(to right, #e8ff7f, #bcc900)"
                break;
            case 1:
                answer.textContent = "Oui c'est sûr !"
                body.style.background = "linear-gradient(to right, #a2ff7d, #28c900)"
                break;
            case 2:
                answer.textContent = "Pas du tout."
                body.style.background ='linear-gradient(to right, #c95a00, #ff0000)'
                break;
            case 3:
                answer.textContent = "Pas sûr."
                body.style.background = "linear-gradient(to right, #ffd000, #c95a00)" 
                break;
        }
    }
});