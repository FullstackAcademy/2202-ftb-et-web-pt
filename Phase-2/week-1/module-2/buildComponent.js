function buildComponent(tag, classList, innerHTML, data, containerNode) {
  
    let node = document.createElement(tag);
    node.innerHTML = innerHTML;
    classList.forEach((c) => {
      node.classList.add(c);
    });
    node.dataset = data;
    //render
    containerNode.append(node);
  }
  
  buildComponent(
    "p",
    ["boxShadow"],
    "<span>Hello</span>",
    { createdFromFn: true },
    myNewDiv
  );