import { auth } from "../firebase";

interface Signup {
    email: string;
    password: string;
}

export const signup = (data: Signup) => {
    // console.log("Signup details : " , data);
    return auth.createUserWithEmailAndPassword(data.email, data.password).then((response) => {
        auth.currentUser?.sendEmailVerification();
        return response;
      });
    
}

interface Login {
    email: string;
    password: string;
}

export const login = (data: Login) => {
    // console.log("Login details : " , data);
    return auth.signInWithEmailAndPassword(data.email, data.password);
}