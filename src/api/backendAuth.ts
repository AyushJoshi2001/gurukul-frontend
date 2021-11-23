import axios from "axios";

const BASE_URL = "http://localhost:8080";

interface BackendSignup {
    id: string;
    role: string;
    name: string;
    email: string;
}

export const backendSignup = (data: BackendSignup) => {
    // console.log("backend signup : ",data);
    const url = BASE_URL+"/signUp"
    axios.post(url, data).then(() => {
        console.log("signup completed");
    })
}

export const getClasses = (uid: string) => {
    const url = BASE_URL+"/classes";
    return axios.post(url, {id: uid}).then((response) => {
        // console.log(response);
        return response;
    });
}

