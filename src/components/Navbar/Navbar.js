import { getAuth } from "firebase/auth";
import * as C from './NavbarStyle';
import Api from '../../Firebase';
import { Link } from 'react-router-dom'
const auth = getAuth();


export const Navbar = () => {
    const handleLogOut = () => {
        Api.LogOut(auth).then(() => {
            localStorage.clear();
            window.location.pathname = "/";
        })
    }
    return (
        <>
            <C.ContainerNavbar>
                <C.NavButton>
                    <Link to="/home"> Home</Link>
                </C.NavButton>
                <C.NavButton>
                    <Link to="/cadastro"> Cadastro de livros</Link>
                </C.NavButton>
                <C.NavButton>
                    <Link to="/cadastro-alunos"> Cadastro de alunos</Link>
                </C.NavButton>
                <C.LogOutButton onClick={handleLogOut}>Sair</C.LogOutButton>

            </C.ContainerNavbar>
        </>
    )
}