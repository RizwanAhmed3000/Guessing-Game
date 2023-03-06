function gameFunction() {
    if (score.textContent > 0) {
        var randomNumber = Math.round(Math.random() * 20);
        console.log(randomNumber);
        console.log(userInput.value);
        console.log(score.textContent);
        numberShown.textContent = randomNumber;
        if (userInput.value == randomNumber) {
            alert('You won');
            score.textContent = +score.textContent + 1;
            if(score.textContent > highScore.textContent){
                highScore.textContent = score.textContent;
            }
        } else {
            console.log('You lose');
            score.textContent = +score.textContent - 1;
        }
    } else {
        alert('You cant play');
    }
}

var userInput = document.querySelector(".userInput");

var checkButton = document.querySelector('.checkButton');

var score = document.querySelector('.score');

var highScore = document.querySelector('.highScore');

var numberShown = document.querySelector('.number')

checkButton.addEventListener('click', gameFunction);

var againButton = document.querySelector('.again');




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
