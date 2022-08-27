import { applyActionCode, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import * as C from "./HomeStyle";
import lupa from '../../assets/lupa.png';
import { doc } from 'firebase/firestore';
import Api from '../../Firebase';

export const Home = ({ user, setUser }) => {
    const auth = getAuth();
    const [json, setJson] = useState();
    const [inputFiltroPesquisa, setInputFiltroPesquisa] = useState();
    const [filtroSelec,setFiltroSelec]=useState('Autor');
    let CollectionRef = 'livro'
    let lista = [];

    const lerBancoLivros = async () => {
        setJson([]);
       
        let livros = await Api.Read(CollectionRef);
        livros.forEach((doc) => {
            lista.push(doc.data());

        })
        setJson(lista);
        localStorage.setItem('json',JSON.stringify(lista))
       
    }

    const filtroPesquisa = (e) => {
        let jsonFiltrado = [];
        setJson(JSON.parse(localStorage.getItem('json')))
     
        if (e.target.value!=='') {
            JSON.parse(localStorage.getItem('json')).forEach((filtro) => {
            if(filtroSelec==='Autor'){
                if (filtro.livros.autor.toLowerCase().includes(e.target.value.toLowerCase())) {
                    jsonFiltrado.push(filtro);
                }}
            if(filtroSelec==='Titulo'){
                if (filtro.livros.titulo.toLowerCase().includes(e.target.value.toLowerCase())) {
                    jsonFiltrado.push(filtro);
                }}
            if(filtroSelec==='Editora'){
                if (filtro.livros.editora.toLowerCase().includes(e.target.value.toLowerCase())) {
                    jsonFiltrado.push(filtro);
                }}


            })
            setJson(jsonFiltrado);
        
        }
    }


    const handleCheckIsAuth = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(localStorage.getItem('user'))
                lerBancoLivros();
            } else {
                localStorage.clear();
                window.location.pathname = '/'
            }
        });
    }
    useEffect(() => {
        handleCheckIsAuth();
        console.log(json);
    }, [])



    return (
        <>
            <C.HomeContainer>
                <C.InputPesquisa placeholder={"Pesquise o seu item "} onChange={(e) => {
                   setInputFiltroPesquisa(e.target.value);filtroPesquisa(e)
                }}
                />
                <img src={lupa}  style={{ height: "50px", top: "-55px", left: "37%", position: "relative", zIndex: "3" }} />
                <C.TabelaLivrosListados>
                    <C.TituloFiltro>Selecione a sua opção de filtragem:
                        <C.Select name="select" onChange={(e)=>{
                            setFiltroSelec(e.target.value);console.log(e.target.value)
                        }}>
                            <C.Option value="Autor" selected>Autor</C.Option>
                            <C.Option value="Titulo" >Título</C.Option>
                            <C.Option value="Editora">Editora</C.Option>
                        </C.Select>
                    </C.TituloFiltro>
                    <table>
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
                    </table>

                    {json && json.map((valor, chave) => (

                        <table key={chave}>
                            <tbody>
                                <C.TR>
                                    <C.TD>{valor.livros.nReg}</C.TD>
                                    <C.TD>{valor.livros.data}</C.TD>
                                    <C.TD>{valor.livros.autor}</C.TD>
                                    <C.TD>{valor.livros.titulo}</C.TD>
                                    <C.TD>{valor.livros.volume}</C.TD>
                                    <C.TD>{valor.livros.exemplar}</C.TD>
                                    <C.TD>{valor.livros.editora}</C.TD>
                                    <C.TD>{valor.livros.ano}</C.TD>
                                    <C.TD>{valor.livros.prateleira}</C.TD>
                                    <C.TD>{valor.livros.aluno}</C.TD>
                                    <C.TD>{valor.livros.devolucao}</C.TD>
                                </C.TR>
                            </tbody>
                        </table>

                    ))}
                </C.TabelaLivrosListados>
            </C.HomeContainer>
        </>
    )
}