const secretNumber = Math.ceil(Math.random()* 20)
const input = document.querySelector('input').value;

const number = document.querySelector('.number');

number.textContent = input

const message = document.querySelector('.message')

if(secretNumber === input){
    message.textContent = 'yey you got it correct'
}
else if(secretNumber < input){
    message.textContent ='your guess is high'
}
else if(secretNumber > input){
    message.textContent = 'your guess is low'
}