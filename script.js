'use strict'

let score = 25
let highScore = 0
let secretNumber = Math.floor(Math.random() * 50 + 1)
// console.log(secretNumber)
function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    // console.log(guess)

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent =
            'Please type a number...'

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent =
            'Congratulation! you guess the correct numberπ'
        document.querySelector('.number').style.width = '30rem'

        // To show the firewokr when you guess the nmber
        document.getElementById('canvas').classList.remove('hidden')

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

        // When guess is to low
    } else if (guess <= secretNumber - 15) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'π To low!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent =
                'π₯ You lost the game! π€― Try again...'
            document.querySelector('.score').textContent = 0
        }

        // When the guess is to high
    } else if (guess >= secretNumber + 15) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'π To high!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent =
                'π₯ You lost the game! π€― Try again...'
            document.querySelector('.score').textContent = 0
        }

        // When the guess is low
    } else if (guess <= secretNumber - 10 || guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'π low!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent =
                'π₯ You lost the game! π€― Try again...'
            document.querySelector('.score').textContent = 0
        }

        // When the guess is high
    } else if (guess >= secretNumber + 10 || guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'π high!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent =
                'π₯ You lost the game! π€― Try again...'
            document.querySelector('.score').textContent = 0
        }
    }
})

// Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 25
    secretNumber = Math.floor(Math.random() * 50 + 1)

    // console.log(secretNumber)

    document.querySelector('.message').textContent = 'Start guessing...π€'
    document.querySelector('.score').textContent = 25
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.getElementById('canvas').classList.add('hidden')

    // highScore = score
})
