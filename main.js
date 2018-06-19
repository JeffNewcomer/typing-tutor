

var textToType = 'grumpy wizards make toxic brew for the evil queen and jack'
var lettersToType = []

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

// creates an object for each letter in the sentence. each object looks like this {letter: "g"}
function makeLetter(letter) {
  return {
    letter: letter
  }
}
// function that creates the div elements on the page
function renderLetter(letter) {
  var $letter = document.createElement('div')
  $letter.textContent = letter.letter
  $letter.style.cssFloat = 'left';
  $letter.style.fontSize = '20px';
  $letter.style.padding = '6px';
  //document.$container.appendChild($letter)
  return $letter
}
// splits the textToType string into individual letters
var letters = textToType.split('')

// loop that creates the array of letters (using the makeLetter function above)
for (var i = 0; i < letters.length; i++) {
  lettersToType.push(makeLetter(letters[i]))
}

// adds the grumpy letters to the body of the page
for (var i = 0; i < lettersToType.length; i++) {
  document.body.appendChild(renderLetter(lettersToType[i]))
}
