const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}
for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}
function dragStart(e) {
  // This allows the drop location to know which element is being moved when you release it
  e.dataTransfer.setData("text/plain", this.id);
  e.dataTransfer.setDragImage(this, 0, 0);
}
function dragEnd() {
  console.log("Drag ended");
}
function dragOver(e) {
  // This line is importante because by default browser don't allow you to drop elements into other elements
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();

  this.classList.add("over");
}
function dragLeave() {
  this.classList.remove("over");
}
function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.appendChild(card);
  this.classList.remove("over");
}
