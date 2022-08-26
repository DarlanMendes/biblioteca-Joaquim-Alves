import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import * as C from "./HomeStyle";
import lupa from '../../assets/lupa.png';

export const Home = ({ user, setUser }) => {
    const auth = getAuth();

    const handleCheckIsAuth = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(localStorage.getItem('user'))

            } else {
                window.location.pathname = '/'
            }
        });
    }
    useEffect(() => {
        handleCheckIsAuth();
    }, [])

    let json=[{nRegis:3,data:"10/10/1991", autor:"Darlan", titulo:"Meu livro",volume:"único"
    ,exemplar:"2",editora:"eee",ano:"1999", prateleira:"e1",
    emprestado:[{aluno:"Darlan", dataDev:"10/12/2022"}]},{nRegis:2,data:"10/10/1991", autor:"Darlan", titulo:"Meu livro",volume:"único"
    ,exemplar:"2",editora:"eee",ano:"1999", prateleira:"e1",
    emprestado:[{aluno:"Darlan", dataDev:"10/12/2022"}]},
    {nRegis:1,data:"10/10/1991", autor:"Darlan", titulo:"Meu livro",volume:"único"
    ,exemplar:"2",editora:"eee",ano:"1999", prateleira:"e1",
    emprestado:[{aluno:"Darlan", dataDev:"10/12/2022"}]}
]

    return (
        <>
           <C.HomeContainer>
            <C.InputPesquisa placeholder={"Pesquise o seu item "} />
            <img src={lupa} style={{height:"50px",top:"-55px",left:"37%",position:"relative",zIndex:"3"}}/>
            <tr>
            <C.TD>N° REGISTRO </C.TD>
                    <C.TD>DATA </C.TD>
                    <C.TD>AUTOR</C.TD>
                    <C.TD>TÍTULO</C.TD>
                    <C.TD>VOLUME</C.TD>
                    <C.TD>EXEMPLAR</C.TD>
                    <C.TD>EDITORA</C.TD>
                    <C.TD>ANO</C.TD>
                    <C.TD>PRATELEIRA</C.TD>
                    <C.TD>ALUNO</C.TD>
                    <C.TD>DEVOLUÇÃO</C.TD>
            </tr>
            {json.map((valor, chave)=>(
                <tr key={valor.nRegis}>
                    <C.TD>{valor.nRegis}</C.TD>
                    <C.TD>{valor.data}</C.TD>
                    <C.TD>{valor.autor}</C.TD>
                    <C.TD>{valor.titulo}</C.TD>
                    <C.TD>{valor.volume}</C.TD>
                    <C.TD>{valor.exemplar}</C.TD>
                    <C.TD>{valor.editora}</C.TD>
                    <C.TD>{valor.ano}</C.TD>
                    <C.TD>{valor.prateleira}</C.TD>
                    <C.TD>{valor.emprestado.aluno}</C.TD>
                    <C.TD>{valor.emprestado.dataDev}</C.TD>

                </tr>
            ))}
            </C.HomeContainer> 
        </>
    )
}