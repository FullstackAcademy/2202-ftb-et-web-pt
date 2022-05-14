 // login to account
//send username and pwd to server
//response is jwt, set state to jwt
export default (username, pwd, setToken) => {
    // mock the api call 
    setTimeout(() => {
        console.log("Submitting ", username, pwd);
        const jwtResponse = "aaaBbbCCc"
        setToken(jwtResponse)
        localStorage.setItem('jwt', jwtResponse)
    }, 2000)
}

//based on the value of token
//truthy
// headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer TOKEN_STRING_HERE'
//   }
//falsey 
//headers: {
    //     'Content-Type': 'application/json',
    //   }

const makeHeaders = (token) => {
    let headers = {
        'Content-Type': 'application/json',
    }

    if (token){
        headers['Authorization'] = 'Bearer ' + token
    }

    return headers 
}

const makeApiCall = (info1, info2, token) => {

}


// Environment Variables 
//Variables defined during npm start. Not in a JS file
//SECRET variable apiKey / Don't want to expose to browsers 


// [SERVER] <---  index.html (bundle.js) [USERs Browser] 
// create variables during NPM start that while this app is running 
// make these variables globally available


// const logMeIn = async () => {
//     const response = await fetch(BASE_URL)
// }
// const getUser = async (postId) => {
//     const response = await fetch(BASE_URL+ postId)
// }