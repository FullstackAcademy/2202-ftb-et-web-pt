//pet state 
let currentPet = ""


// event handler for input 
let petInput = document.getElementById("petInput");

petInput.addEventListener('input', (event) => {
    currentPet = event.target.value;
    console.log("Current Pet is", currentPet)
    renderPet();
})

// Trigger change on button 
// Add Old pets

let petLinks = {
    DOG: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
   ,CAT: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"
}

// determine whether or not my state is a CAT or DOG 
// if it's a cat, return cat pic / dog return dog pic
function petPicLinkGetter(petString){
    petString = petString.toLowerCase();
    if (petString === "cat"){ 
        return petLinks.CAT;
    } else if( petString === "dog"){
        return petLinks.DOG
    }
    return null;
}

// render function
function renderPet(){
    let petContainer = document.getElementById("petContainer"); 
    let petLink  = petPicLinkGetter(currentPet)
    if (petLink !== null){
        if (petContainer.firstChild){
            petContainer.firstChild.remove()
        }
        let img = document.createElement("img");
        img.src = petLink
        petContainer.append(img);

    }
}




