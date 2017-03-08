var args = process.argv.slice(2).join('').toLowerCase();

function countLetters(stringParameter) {
  var objectReturned = {};

  for(letter of stringParameter) {
      //First check if the key already exists
      if (!objectReturned[letter]){
        //If not, initialize key/value pair
        objectReturned[letter] = [stringParameter.indexOf(letter)];
      } else {
        //Store the last value in the array for the current key
        var lastIndex = objectReturned[letter][objectReturned[letter].length-1];

        //Use lastIndex value in indexOf function so that it doesn't return the
        //first index again
        objectReturned[letter].push(stringParameter.indexOf(letter, lastIndex + 1));
      }
    }
  console.log(objectReturned);
}

countLetters(args);
