let secretNumber = Math.ceil(Math.random()* 20)
const input = document.querySelector('.guess');

const number = document.querySelector('.number');
let score = document.querySelector('.score');
let scoreValue =20;

let GameHighScore = 0;
check = document.querySelector('.check');

let message = document.querySelector('.message')

check.addEventListener('click', function(){
   
    scoreValue --
        score.textContent = scoreValue
        
    number.textContent = input.value;
    if(scoreValue == 0  || secretNumber ==input.value){
        //message.textContent = 'Oops you lost'
        check.disabled = true;
            
    }
    
 
    if(secretNumber == input.value){
        document.querySelector('body').style.backgroundColor = "blue";
        message.textContent = 'yey you got it correct';
        if( scoreValue > GameHighScore){
            GameHighScore = scoreValue
            document.querySelector('.HighScore').textContent = GameHighScore;
        }
        
    }
    else if(secretNumber < input.value  && input.value  <= 20){
        message.textContent ='your guess is high';
    }
    else if(input.value  > 20 || input.value < 0){
        message.textContent = 'you are out of the range';
    }
    else if(secretNumber > input.value ){
        message.textContent = 'your guess is low';
    }
})

againButton = document.querySelector('.again');
againButton.addEventListener('click',function(){
    secretNumber = Math.ceil(Math.random()* 20)
    input.value = null;
    number.textContent = input.value;
    message.textContent = 'Start guessing...'
    scoreValue =20
    score.textContent = scoreValue
    check.disabled = !true;

})


