//pet state 
let currentPet = ""


// event handler for input 
let petInput = document.getElementById("petInput");
console.log("PetInput", petInput)

petInput.addEventListener('input', (e) => {
    console.log(e.target.value);
    currentPet = e.target.value;
    renderPet();
})

let petLinks = {
    DOG: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
   ,CAT: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"
}

// render function
function renderPet(){
    let petContainer = document.getElementById("petContainer"); 
    //remove existing children
    if (currentPet.toUpperCase() in petLinks) {
        petContainer.firstChild.remove();
        let petNode = document.createElement("img");
        petNode.src = petLinks[currentPet.toUpperCase()];
        petContainer.append(petNode);
    } 
}




