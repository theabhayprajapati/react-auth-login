import Axios from 'axios';
/* fetch post /server/login */
const BASE_URL = "https://auth-system-with-mongodb-nodejs-production.up.railway.app/server";
export const login = async (email, password) => {
    /* get */
    const res = await Axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password,
    });
    console.log(res);
    return res;

}

/* register */
export const register = async (user) => {
    console.log("user in register");
    console.log(user);
    const res = await Axios.post(`${BASE_URL}/register`, user);
    return res;
}