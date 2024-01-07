/* Get Login Data */
export function getLoginData(data) {
    if(data.status !== 400) {
        const item = {
            status: data.status,
            message: data.message,
            token: data.body.token
        }
    
        return item;
    } else {
        const item = {
            status: data.status,
            message: data.message,
        }
    
        return item;
    }
}

/* Get Login Fetch */
export function getLoginFetchData(data) {
    if(data.body !== undefined) {
        const item = {
            status: data.status,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }

        return item;
    } else {
        const item = {
            status: 0,
            email: "",
            firstName: "",
            lastName: ""
        }
        
        return item;
    }
}

/* Save User Profil Data */
export function saveUserProfilData(data) {
    const item = {
        status: data.status,
        message: data.message,
    }

    return item;
}