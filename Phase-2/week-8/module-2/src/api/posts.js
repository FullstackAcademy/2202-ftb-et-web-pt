const BASE_URL = process.env.REACT_APP_BASE_URL
console.log(process.env);

export const getPosts = async () => {
    const response = fetch(BASE_URL)
        .then(r => r.json())
    ;
}


