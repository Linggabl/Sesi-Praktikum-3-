
document.getElementById("bgcolor").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});


function changeFontSize(sizeChange) {
  const container = document.querySelector(".container");
  const currentSize = parseFloat(window.getComputedStyle(container).fontSize);
  container.style.fontSize = `${currentSize + sizeChange}px`;
}


function toggleClass(className) {
  document.body.classList.toggle(className);
}


document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskInput.value;
    taskList.appendChild(listItem);
    taskInput.value = ""; // 
    
  } else {
    alert("Please enter a task!");
  }
});
