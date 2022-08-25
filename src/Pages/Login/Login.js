import * as C from './LoginStyle';
export const Login = () => {
    return (

        <C.LoginPage>
            <C.Container>
                <C.Input placeholder='Digite seu email'/>
                <C.Input placeholder='Digite sua senha'/>
                <C.Button> Entrar</C.Button>
            </C.Container>

        </C.LoginPage>

    )
}