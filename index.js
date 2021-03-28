
const input = document.querySelector('input');

const showScore = document.querySelector('.score');

const highScore = document.querySelector('.high-score');


const checkButton = document.querySelector('.check');

const body = document.querySelector('body');

const bottomTitle = document.querySelector('.bottom-title')

const question = document.querySelector('.question');

const questionH2 = document.querySelector('#question-h2');

let score = 20;

let secretNumber = Math.ceil(Math.random() * 20);

let high = 0;

checkButton.addEventListener('click',function(){

    // alert(secretNumber);

    if(score === 0){
        bottomTitle.innerText = 'You Lost Game';
         
        
    }

    else if(Number(input.value) === secretNumber){
        body.style.backgroundColor = 'green';
        input.style.backgroundColor = 'green';
        question.style.width = '14rem';
        bottomTitle.innerText = 'You Won Game';
        questionH2.innerText = secretNumber;
        if(score > highScore){
            highScore = score;
        }
    }
    else if(input.value > secretNumber){
        bottomTitle.innerText = 'Too High';
        score--;
        showScore.innerText = score;
    }
    else if(input.value < secretNumber){
        bottomTitle.innerText = 'Too low';
        score--;
        showScore.innerText = score;
    }
})

