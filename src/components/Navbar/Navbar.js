import { getAuth} from "firebase/auth";
import * as C from './NavbarStyle';
import Api from '../../Firebase';
const auth = getAuth();


export const Navbar =()=>{
    const handleLogOut =()=>{
        Api.LogOut(auth).then(()=>{
           localStorage.clear();
           window.location.pathname="/";
        })
    }
    return(
        <>
        <C.ContainerNavbar>
            <C.LogOutButton onClick={handleLogOut}>Sair</C.LogOutButton>
        </C.ContainerNavbar>
        </>
    )
}