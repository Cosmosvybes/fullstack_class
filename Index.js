//  DOM

// let divElement = document.querySelector("#main");

let userInput = document.querySelector("#user_input");
let submitBtn = document.querySelector("#submit_btn");
let task_list = document.querySelector("#task_list");
let completed = document.querySelector("#completed_list");


submitBtn.className = "submit"; // set the class name for styling
submitBtn.addEventListener("click", function () {
  if (!userInput.value) {
    return alert("Enter a valid task"); //return a warning if there is no input
  } else {
    let liElem = document.createElement("li"); //created a li element
    let delBtn = document.createElement("button"); // created a button - delete
    let editBtn = document.createElement("button"); // created a button - edit
    let comBtn = document.createElement("button"); // created a button - complete

    delBtn.className = "delete"; // set the class name for styling
    editBtn.className = "edit"; // set the class name for styling
    comBtn.className = "complete"; // set the class name for styling

    delBtn.textContent = "Delete🗑️"; // set the textContent for delete button
    comBtn.textContent = "Mark as Complete✅"; // set the text for completed task
    editBtn.textContent = "Edit 📝";
    liElem.textContent = userInput.value; //set the text content of the li

    liElem.appendChild(editBtn); // we appended the button
    liElem.appendChild(delBtn); // we appended the button
    liElem.appendChild(comBtn); // we appended the complete button
    task_list.appendChild(liElem); // we appended the li into the ul
    userInput.value = "";

    delBtn.addEventListener("click", function () {
      let parent = liElem;
      task_list.removeChild(parent);
    });

    //edit func
    editBtn.addEventListener("click", function () {
      let inputElem = document.createElement("textarea"); // create a textarea for editing
      let saveBtn = document.createElement("button");
      saveBtn.className = "save"; // set the class name for styling
      saveBtn.textContent = "Update 🔄";
      inputElem.value = liElem.textContent
        .replace("Edit 📝Delete🗑️Mark as Complete ✅", "")
        .trim(); // get the current text without buttons and completed text
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
          liElem.appendChild(comBtn); // we appended the complete button
        }
      });
    });

    comBtn.addEventListener("click", function () {
      if (comBtn.textContent == "Mark as Complete ✅") {
        comBtn.textContent = "Undo ↩️";
        completed.appendChild(liElem);
        editBtn.style.display = "none";

        delBtn.addEventListener("click", function () {
          let parent = liElem;
          completed.removeChild(parent);
        });
      } else {
        comBtn.textContent = "Mark as Complete ✅";
        task_list.appendChild(liElem);
        editBtn.style.display = "inline";
        delBtn.style.display = "inline";
      }
    });
  }
});
