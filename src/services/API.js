import { getLoginData, getLoginFetchData, saveUserProfilData } from "../services/API-Data";


/* Login */
export const getLogin = async (identifiants) => {
    const URL_API = "http://localhost:3001/api/v1/user/login";

    const loginResponse = await fetch(URL_API, {
        body: JSON.stringify(identifiants),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST"
    }).then((response) => response.json());

    console.clear();
    return await getLoginData(loginResponse);
}

/* Is connected? */
export const getLoginFetch = async (token) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const loginFetchResponse = await fetch(URL_API, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        method: "POST"
    }).then((response) => response.json());

    console.clear();
    return await getLoginFetchData(loginFetchResponse);
}

/* Save changement name */
export const saveUserProfil = async (token, fullName) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const saveUserProfilResponse = await fetch(URL_API, {
        body: JSON.stringify(fullName),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        method: "PUT"
    }).then((response) => response.json());

    console.clear();
    return await saveUserProfilData(saveUserProfilResponse);
}