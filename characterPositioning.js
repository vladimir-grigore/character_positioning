var args = process.argv.slice(2).join('').toLowerCase();

function countLetters(stringParameter) {
  var objectReturned = {};
    console.log(stringParameter)

  for(letter of stringParameter) {

    if (!objectReturned.letter) {
      if (!objectReturned[letter]){
        objectReturned[letter] = 1;
      } else {
        objectReturned[letter] += 1;
      }
    }
  }
  console.log(objectReturned);
}

countLetters(args);
