import { applyActionCode, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import * as C from "./HomeStyle";
import lupa from '../../assets/lupa.png';
import { doc } from 'firebase/firestore';
import Api from '../../Firebase';

export const Home = ({ user, setUser }) => {
    const auth = getAuth();
    const [json, setJson] = useState([]);
    let CollectionRef = 'livro'
    let lista = [];

    const lerBancoLivros = async () => {
        setJson([]);

        let livros = await Api.Read(CollectionRef);
        livros.forEach((doc) => {
            lista.push(doc.data())
        })
        setJson(lista)
    }
    const handleCheckIsAuth = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(localStorage.getItem('user'))
                lerBancoLivros();
            } else {
                window.location.pathname = '/'
            }
        });
    }
    useEffect(() => {
        handleCheckIsAuth();

    }, [])



    return (
        <>
            <C.HomeContainer>
                <C.InputPesquisa placeholder={"Pesquise o seu item "} />
                <img src={lupa} style={{ height: "50px", top: "-55px", left: "37%", position: "relative", zIndex: "3" }} />
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
                {json && json.map((valor, chave) => (
                    <div key={valor.nReg}>
                        <C.TR>
                            <C.TD>{valor.nReg}</C.TD>
                            <C.TD>{valor.data}</C.TD>
                            <C.TD>{valor.autor}</C.TD>
                            <C.TD>{valor.titulo}</C.TD>
                            <C.TD>{valor.volume}</C.TD>
                            <C.TD>{valor.exemplar}</C.TD>
                            <C.TD>{valor.editora}</C.TD>
                            <C.TD>{valor.ano}</C.TD>
                            <C.TD>{valor.prateleira}</C.TD>
                        </C.TR>




                    </div>
                ))}
            </C.HomeContainer>
        </>
    )
}