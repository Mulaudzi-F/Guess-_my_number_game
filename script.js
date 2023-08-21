const secretNumber = Math.ceil(Math.random()* 20)
const input = document.querySelector('.guess');

const number = document.querySelector('.number');
let score = document.querySelector('.score').textContent = 20;


check = document.querySelector('.check');
let message = document.querySelector('.message')

check.addEventListener('click', function(){
    
    number.textContent = input.value;
    if(secretNumber != input.value){
        score -=1 
 }
    if(secretNumber == input.value){
        message.textContent = 'yey you got it correct';
    }
    else if(secretNumber < input.value  && input.value  <= 20){
        message.textContent ='your guess is high';
    }
    else if(input.value  > 20){
        message.textContent = 'you are out of the range';
    }
    else if(secretNumber > input.value ){
        message.textContent = 'your guess is low';
    }
})

againButton = document.querySelector('.again');
againButton.addEventListener('click',function(){
    input.value = null;
    number.textContent = input.value;
    message.textContent = 'Start guessing...'

})


