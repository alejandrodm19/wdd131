const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  const chapter = input.value.trim();

  if (chapter !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";

    li.append(deleteButton);
    list.append(li);

    input.value = "";

    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
    });
  } else {
    console.log("Please enter a valid chapter.");
  }

  
  input.focus();
});
