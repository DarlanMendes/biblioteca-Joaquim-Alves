
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
      Update: async (collection, nome,nomeReg) => {

            let nomes = nome;
        
            console.log('Nomes', nomeReg)
            // Add a new document in collection "livros"
            return await setDoc(doc(db, collection, nomeReg), {
             nomes
            });
    },
    Read: async (collectionRef) => {

        let listaAlunos = await getDocs(collection(db, collectionRef));
        return listaAlunos;
    }
}