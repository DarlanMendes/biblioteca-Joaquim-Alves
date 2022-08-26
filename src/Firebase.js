
import { signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {app} from './ApiFirebase';
import { signOut } from "firebase/auth";
const db = getFirestore(app);
export default{
    Login: async(auth,email,password)=>{
        return await signInWithEmailAndPassword(auth,email,password);
    },
    LogOut: async (auth)=>{
        return await signOut(auth)

    }
}