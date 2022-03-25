let nodes = document.getElementsByClassName("container");
for (let i = 0; i < nodes.length; i++){
  nodes[i].addEventListener('click', printBubbling, true)
}

function printBubbling(e){
  switch(e.eventPhase){
     case 1: {
       console.log("Capturing", this);
       break;
     }
      case 2: {
       console.log("At Target", this);
       break;
     }
       case 3: {
       console.log("Bubbling", this);
       break;
     }
   }
}
