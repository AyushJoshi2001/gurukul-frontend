import axios from "axios";
import { BASE_URL } from "./backendAuth";

export const getClasses = (uid: string) => {
    const url = BASE_URL+"/classes";
    return axios.post(url, {id: uid}).then((response) => {
        // console.log(response);
        return response;
    });
}

interface CreateClass {
    id: string;
    title: string;
    topic: string;
    moto: string;
}
export const createClass = (data: CreateClass) => {
    const url = BASE_URL+"/createClass";
    return axios.post(url, data).then((response) => {
        return response;
    });
}

interface JoinClass {
    id: string;
    secretCode: number;
}
export const joinClass = (data: JoinClass) => {
    const url = BASE_URL+"/studentJoinClass";
    return axios.post(url, data).then((response) => {
        return response;
    });
}

interface GetRole {
    id: string;
}
export const getRole = (data: GetRole) => {
    const url = BASE_URL+"/role";
    return axios.post(url, data).then((response) => {
        return response;
    });
}