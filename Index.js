//  Function to check the vowels of any given word.

let inputElem = document.querySelector("#input-value"); // querying the input html element.

let submitBtn = document.querySelector("#submit-btn");

let output_ = document.querySelector("#output");

submitBtn.addEventListener("click", function () {
  let inputValue = inputElem.value;
  let result = checkVowel(inputValue);

  output_.id = output_.id != "animate" ? "animate" : "output";
  output_.innerHTML = result.join("-");
  inputElem.value = "";
}); // add event listener, of type click and callback;

function checkVowel(value) {
  let word = value.toLowerCase();

  let vowelsFound = [];
  let vowels = "aeiou";

  for (let i = 0; i < word.length; i++) {
    //checking  the vowels by iteration.
    if (vowels.includes(word[i])) {
      // does the  aeiou includes any of the letters. ?
      vowelsFound.push(word[i]); // insert to the array vowelsFound if the vowel character  is found
    }
  }

  return vowelsFound; //return the vowel charcters
}
