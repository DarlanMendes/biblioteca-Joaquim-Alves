import * as C from './LoginStyle';
import {ImBooks} from 'react-icons/im';
import {useState} from 'react';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Api from '../../Firebase'
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    let navigate = useNavigate();
    const handleLogin = async () => {
        if ((password !== '' || password !== null) && email !== '') {
            Api.Login(auth, email, password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(userCredential);
                localStorage.setItem('user',user)
                navigate('/home');
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Erro",errorCode,errorMessage);
                });


        }
        else {
            alert('Por favor, preencha todos os campos')
        }
       
    }
    return (
        

        <C.LoginPage>
            <C.Container>
                <C.Titulo><ImBooks/>Biblioteca Joaquim Alves</C.Titulo>
                <C.Input placeholder='Digite seu email' onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <C.Input placeholder='Digite sua senha' type="password" onChange={(e)=>{
                    setPassword(e.target.value);}}/>
                <C.Button onClick={handleLogin}> Entrar</C.Button>
            </C.Container>

        </C.LoginPage>

    )
}