// login to account
//send username and pwd to server
//response is jwt, set state to jwt
const login = (username, pwd, setToken) => {
    // mock the api call 
    setTimeout(() => {
        console.log("Submitting ", username, pwd);
        const jwtResponse = ""
        setToken(jwtResponse)
    }, 2000)
}


export default {login}
