//  DOM

// let divElement = document.querySelector("#main");

let userInput = document.querySelector("#user_input");
let submitBtn = document.querySelector("#submit_btn");
let task_list = document.querySelector("#task_list");

submitBtn.className = "submit"; // set the class name for styling

submitBtn.addEventListener("click", function () {
  if (!userInput.value) {
    return "Enter a value"; //return a warning if there is no input
  } else {
    let liElem = document.createElement("li"); //created a li element
    let delBtn = document.createElement("button"); // created a button - delete
    let editBtn = document.createElement("button"); // created a button - edit
    let completeBtn = document.createElement("input"); // created a checkbox
    let completeText = document.createElement("span"); // created a span for completed text
    completeBtn.type = "checkbox"; // set the type of the checkbox
    delBtn.textContent = "Delete Task"; // set the textContent

    delBtn.className = "delete"; // set the class name for styling
    editBtn.className = "edit"; // set the class name for styling
    completeBtn.className = "complete"; // set the class name for styling

    editBtn.textContent = "Edit Task";
    completeText.textContent = "Mark as Complete"; // set the text for completed task
    liElem.textContent = userInput.value; //set the text content of the li
    liElem.appendChild(editBtn); // we appended the button
    liElem.appendChild(delBtn); // we appended the button
    liElem.appendChild(completeBtn); // we appended the checkbox
    liElem.appendChild(completeText); // we appended the completed text
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
      inputElem.value = liElem.textContent.replace(
        "Edit TaskDelete TaskTask Completed",
        ""
      ); // get the current text without buttons and completed text
      // inputElem.value = liElem.textContent;
      liElem.textContent = "";
      liElem.appendChild(inputElem);
      liElem.appendChild(saveBtn);

      saveBtn.addEventListener("click", function () {
        if (!inputElem.value) {
          alert("Enter a valid task");
        } else {
          liElem.textContent = inputElem.value;
          liElem.appendChild(editBtn);
          liElem.appendChild(delBtn);
          liElem.appendChild(completeBtn); // we appended the checkbox
          liElem.appendChild(completeText); // we appended the completed text
        }
      });
    });
  }
});
