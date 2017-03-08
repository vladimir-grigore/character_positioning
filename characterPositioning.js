var args = process.argv.slice(2).join('').toLowerCase();

function countLetters(stringParameter) {
  var objectReturned = {};

  for(letter of stringParameter) {
      if (!objectReturned[letter]){
        objectReturned[letter] = [stringParameter.indexOf(letter)];
      } else {
        var lastIndex = objectReturned[letter][objectReturned[letter].length-1];
        objectReturned[letter].push(stringParameter.indexOf(letter, lastIndex + 1));
      }
    }
  console.log(objectReturned);
}

countLetters(args);
