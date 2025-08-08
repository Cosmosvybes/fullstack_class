//  Function to check the vowels of any given word.

let inputElem = document.querySelector("#input-value"); // querying the input html element.

let submitBtn = document.querySelector("#submit-btn");

let output_ = document.querySelector("#output");

submitBtn.addEventListener("click", function () {
  let inputValue = inputElem.value;
  let result = checkVowel(inputValue);

  const { vowelMessage, consonantMessage, consonant, vowels } = result;
  output_.id = output_.id != "animate" ? "animate" : "output";
  output_.innerHTML = `${vowelMessage} : ${vowels} <br/> ${consonantMessage}: ${consonant}`;
  inputElem.value = "";
}); // add event listener, of type click and callback;

function checkVowel(value) {
  let word = value.toLowerCase();

  let vowelsFound = [];
  let consonantFound = [];
  let vowels = "aeiou";

  for (let i = 0; i < word.length; i++) {
    //checking  the vowels by iteration.
    if (vowels.includes(word[i])) {
      // does the  aeiou includes any of the letters. ?
      vowelsFound.push(word[i]); // insert to the array vowelsFound if the vowel character  is found
    } else {
      if (
        word[i] != " " &&
        word[i] != "'" &&
        word[i] != "_" &&
        word[i] != "$"
      ) {
        consonantFound.push(word[i]); //  insert only consonant with no white-space;
      }
    }
  }

  return {
    vowels: vowelsFound.join(", "),
    vowelMessage: "This are the vowels",
    consonantMessage: "This are the consonant",
    consonant: consonantFound.join(", "),
  }; //return the vowel characters
}
