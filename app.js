function gameFunction() {
    if (score.textContent > 0) {
        var randomNumber = Math.round(Math.random() * 20);
        // console.log(randomNumber);
        // console.log(userInput.value);
        // console.log(score.textContent);
        numberShown.textContent = randomNumber;
        if (userInput.value == randomNumber) {
            winingText.textContent = "You Won!";
            score.textContent = +score.textContent + 1;
            if (score.textContent > highScore.textContent) {
                highScore.textContent = score.textContent;
            }
        } else {
            winingText.textContent = "You Lose!";
            score.textContent = +score.textContent - 1;

        }
    } else {
        lose();

    }
}

function resetGame() {
    location.reload();
}

function addHidden() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}
function removeHidden() {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}
function ecapeKey(a) {
    if (a.key === "Escape") {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    }
}

function win(){
    winingText.classList.remove('hidden');
}
function lose(){
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    modalText.textContent = "Your score is '0' try again later or click again to play."

}


var userInput = document.querySelector(".userInput");

var checkButton = document.querySelector('.checkButton');

var score = document.querySelector('.score');

var highScore = document.querySelector('.highScore');

var numberShown = document.querySelector('.number')

var againButton = document.querySelector('.again');

var modalButton = document.querySelector('.modalButton');

var overlay = document.querySelector('.overlay');

var modal = document.querySelector('.modal');

var closeBtn = document.querySelector('.close');

const body = document.querySelector('body');

var modalText = document.querySelector('.modalText')

var winingText = document.querySelector('.winText');

checkButton.addEventListener('click', gameFunction);

againButton.addEventListener('click', resetGame);

overlay.addEventListener('click', addHidden)

closeBtn.addEventListener('click', addHidden)

body.addEventListener('keydown', ecapeKey);

modalButton.addEventListener('click', removeHidden);

// var randomNumber = Math.round(Math.random() * 20);



// checkButton.addEventListener('click', ()=> {
//     var randomNumber = Math.round(Math.random() * 20);
//     console.log(randomNumber);
//     console.log(userInput.value);
//     console.log(score.textContent);
//     if(userInput.value == randomNumber){
//         alert('You won');
//         score.textContent = +score.textContent + 1;
//     }else{
//         console.log('You lose');
//         score.textContent = +score.textContent - 1;
//     }
// });
