//  DOM

// let divElement = document.querySelector("#main");

let userInput = document.querySelector("#user_input");
let submitBtn = document.querySelector("#submit_btn");
let task_list = document.querySelector("#task_list");

submitBtn.addEventListener("click", function () {
  if (!userInput.value) {
    console.log("Enter a value"); //return a warning if there is no input
  } else {

    
    let liElem = document.createElement("li"); //created a li element
    let delBtn = document.createElement("button"); // created a button - delete
    let editBtn = document.createElement("button"); // created a button - edit
    delBtn.textContent = "del"; // set the textContent
    editBtn.textContent = "edit";

    liElem.textContent = userInput.value; //set the text content of the li
    liElem.appendChild(editBtn); // we appended the button
    liElem.appendChild(delBtn); // we appended the button
    task_list.appendChild(liElem); // we appended the li into the ul
    userInput.value = "";


    delBtn.addEventListener("click", function () {
      let parent = liElem;
      task_list.removeChild(parent);
    });

    //edit func
    editBtn.addEventListener("click", function () {
      let inputElem = document.createElement("input");
      let saveBtn = document.createElement("button");
      saveBtn.textContent = "save task";
      inputElem.value = liElem.textContent;
      liElem.textContent = "";
      liElem.appendChild(inputElem);
      liElem.appendChild(saveBtn);

      saveBtn.addEventListener("click", function () {
        liElem.textContent = inputElem.value;
        liElem.appendChild(editBtn);
        liElem.appendChild(delBtn);
      });
    });
  }
});
