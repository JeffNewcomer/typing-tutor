// creates a div element to hold the Typing Tutor Text
var $title = document.createElement('div')
$title.textContent = "Typing Tutor"
document.body.appendChild($title)
$title.style.fontSize = '50px'
$title.style.textAlign = 'center'
$title.style.padding = '100px'

// var $container = document.createElement('div')
// document.body.appendChild($container)
// $container.style.textAlign = 'center'
// $container.style.width = 'auto'
// $container.style.height = '120px'
// $container.style.border = "2px solid black"

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



// function that creates the individual div elements on the page for each letter
function renderLetter(letter, currentCharacter, index) {
  var $letter = document.createElement('div')
  $letter.textContent = letter.letter
  $letter.style.cssFloat = 'left';
  $letter.style.fontSize = '20px';
  $letter.style.padding = '6px';
  console.log(letter, currentCharacter, index);
  if (currentCharacter === index) {
    $letter.classList.add('currentCharacter')


  }
  //document.$container.appendChild($letter)
  return $letter
}

// appends the letters from the sentence to the body of the page
for (var i = 0; i < lettersToType.length; i++) {
  document.body.appendChild(renderLetter(lettersToType[i], appState.currentCharacter, i))
}
