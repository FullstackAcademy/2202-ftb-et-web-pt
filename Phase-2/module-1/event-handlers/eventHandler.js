const hOnes = document.getElementsByTagName("h1");
const firstH1 = hOnes[0];


// event and the function to fire on that event 
firstH1.addEventListener('click', function(e){
    // the fired function takes in a param, the event 
    alert("You have clicked the button")
    // this is the node that the listener was defined on 
    console.log(this);
})


const unorderedList =  document.getElementById("list");
unorderedList.addEventListener('click', function(event){
    // console.dir vs console.log 
    console.dir(event.target);
})
