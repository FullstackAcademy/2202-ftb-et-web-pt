console.dir(document);

// Creation and Adding
const myNewDiv = document.createElement("div");
myNewDiv.innerText = "Test";
document.body.append(myNewDiv);

myNewDiv.id = "container";
console.dir(myNewDiv)

for (let i = 0; i <= 5; i++) {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "<h1> Hey There </h1>";
  myNewDiv.append(paragraph);
}


// Accessor Methods
let childNodes = myNewDiv.children
let lastNode = myNewDiv.lastElementChild;
let nextToLast = lastNode.previousElementSibling;
let container = nextToLast.parentElement;

// get an element by Id, className and tag
// let aNewReferenceToContainer = document.getElementById("container");
// console.dir("By ID:")
// console.dir(aNewReferenceToContainer)

// let classList = document.getElementsByClassName("cool");
// console.log(classList[classList.length - 1])
// let spanList = document.getElementsByTagName("span");
// console.log("Span List", spanList)

// debugger;
// lastNode.remove();
// nextToLast.remove();

// Attributes of Nodes
// myNewDiv.style.backgroundColor = "red";
for (let i = 0; i < myNewDiv.children.length; i++) {
  if (i % 2 === 0) {
    myNewDiv.children[i].style.backgroundColor = "red"
    myNewDiv.children[i].dataset.isEven = true
  }
  myNewDiv.children[i].classList.add("boxShadow");
  // Data Attribute
  myNewDiv.children[i].dataset.position = i;
}


