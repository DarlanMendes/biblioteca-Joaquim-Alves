
import { signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {app} from './ApiFirebase';
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);
export default{
    Login: async(auth,email,password)=>{
        return await signInWithEmailAndPassword(auth,email,password);
    },
    LogOut: async (auth)=>{
        return await signOut(auth)

    },
      Update: async (collection, livro) => {

            let livros = livro;
        
            console.log('livros', livros.nReg)
            // Add a new document in collection "livros"
            return await setDoc(doc(db, collection, livros.nReg), {
             livros
            });
    },
    Read: async (collectionRef) => {

        let listaAlunos = await getDocs(collection(db, collectionRef));
        return listaAlunos;
    }
}