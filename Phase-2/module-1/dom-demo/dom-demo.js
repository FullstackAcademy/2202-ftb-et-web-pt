console.log(document);

// Creation and Adding
const myNewDiv = document.createElement("div");
myNewDiv.innerText = "Test";
document.body.append(myNewDiv);

myNewDiv.id = "container";

for (let i = 0; i <= 5; i++) {
  let paragraph = document.createElement("p");
  paragraph.innerText = i + "th Paragraph";
  myNewDiv.append(paragraph);
}

// Accessor Methods
//debugger;
// let childNodes = myNewDiv.children
// let lastNode = myNewDiv.lastElementChild;
// let nextToLast = lastNode.previousElementSibling;
// let container = nextToLast.parentElement;

// debugger;
// lastNode.remove();
// nextToLast.remove();

// Attributes of Nodes
// myNewDiv.style.backgroundColor = "red";
// for (let i = 0; i < myNewDiv.children.length; i++) {
//   myNewDiv.children[i].classList.add("boxShadow");

//   // Data Attribute
//   myNewDiv.children[i].dataset.position = i;
// }


