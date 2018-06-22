// creates a div element to hold the Typing Tutor Text
var $title = document.createElement('div')
$title.textContent = "Typing Tutor"
document.body.appendChild($title)
$title.classList.add('largerText')

// creates a div container to hold the individual div elements that contain each letter in the "grumpy' phrase"
var $container = document.createElement('div')
document.body.appendChild($container)

var textToType = 'grumpy wizards make toxic brew for the evil queen and jack'
var lettersToType = []

// splits the textToType string into individual letters
var letters = textToType.split('')

// creates an object for each letter in the sentence. each object looks like this {letter: "g"}
function makeLetter(letter) {
  return {
    letter: letter
  }
}

// loop that creates the array of letters (using the makeLetter function above)
for (var i = 0; i < letters.length; i++) {
  lettersToType.push(makeLetter(letters[i]))
}

var appState = {
  characters: lettersToType,
  currentCharacter: 0,
  failures: 0
}

// function that creates the individual div elements with the letters in them on the page
function renderLetter(letter, currentCharacter, index) {
  var $letter = document.createElement('div')
  $letter.textContent = letter.letter
  $letter.classList.add('smallLetters')

  // changes the current letter's color to white
  if (currentCharacter === index) {
    $letter.classList.add('currentCharacter')
  }
  return $letter
}

// "renders" all the letters from the sentence to the container
function renderThePhrase() {
  for (var i = 0; i < lettersToType.length; i++) {
    $container.appendChild(renderLetter(lettersToType[i], appState.currentCharacter, i))
    }
}
renderThePhrase()

window.addEventListener('keydown', function(event) {
  if (event.key === lettersToType[appState.currentCharacter].letter) {
    appState.currentCharacter = appState.currentCharacter +1;
    $container.innerHTML = '';
    renderThePhrase()
  }
  else {
    appState.failures = appState.failures +1;
    var $currentChar = document.querySelector('.currentCharacter')
    $currentChar.classList.add('failed')
  }
  if (appState.currentCharacter === textToType.length) {
    calculateScore()
    var score = calculateScore()
    $scoreContainer.textContent = 'Game Over! Your score was ' + score + '%'
  }
})

// creates a div element to hold the individual letters and the final score
var $scoreContainer = document.createElement('div')
document.body.appendChild($scoreContainer)
$scoreContainer.classList.add('largerText')

function calculateScore() {
  var calc = (((textToType.length - appState.failures) / textToType.length) * 100)
  return Math.round(calc)
}
