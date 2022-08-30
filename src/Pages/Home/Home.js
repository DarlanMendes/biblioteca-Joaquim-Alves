import { applyActionCode, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import * as C from "./HomeStyle";
import lupa from '../../assets/lupa.png';
import { doc } from 'firebase/firestore';
import Api from '../../Firebase';

export const Home = ({ setUser }) => {
    const auth = getAuth();
    const [json, setJson] = useState();
    
    const [inputFiltroPesquisa, setInputFiltroPesquisa] = useState();
    const [filtroSelec, setFiltroSelec] = useState('Autor');
    let CollectionRef = 'livro'
    let lista = [];
    let listaAlunos = []

    const lerBancoLivros = async () => {
        setJson([]);
         lista =[]
        let livros = await Api.Read(CollectionRef);
        livros.forEach((doc) => {
            lista.push(doc.data());
            console.log(lista);
        })
        setJson(lista);
        localStorage.setItem('json', JSON.stringify(lista))

    }
    

    const filtroPesquisa = (e) => {
        let jsonFiltrado = [];
        setJson(JSON.parse(localStorage.getItem('json')))

        if (e.target.value !== '') {
            JSON.parse(localStorage.getItem('json')).forEach((filtro) => {
                if (filtroSelec === 'Autor') {
                    if (filtro.livros.autor.toLowerCase().includes(e.target.value.toLowerCase())) {
                        jsonFiltrado.push(filtro);
                    }
                }
                if (filtroSelec === 'Titulo') {
                    if (filtro.livros.titulo.toLowerCase().includes(e.target.value.toLowerCase())) {
                        jsonFiltrado.push(filtro);
                    }
                }
                if (filtroSelec === 'Editora') {
                    if (filtro.livros.editora.toLowerCase().includes(e.target.value.toLowerCase())) {
                        jsonFiltrado.push(filtro);
                    }
                }


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
                setUser(false)
                localStorage.clear();
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
                <C.InputPesquisa placeholder={"Pesquise o seu item "} onChange={(e) => {
                    setInputFiltroPesquisa(e.target.value); filtroPesquisa(e)
                }}
                />
                <img src={lupa} style={{ height: "50px", top: "-55px", left: "37%", position: "relative", zIndex: "3" }} />
                <C.TabelaLivrosListados>
                    <C.TituloFiltro>Selecione a sua opção de filtragem:
                        <C.Select name="select" onChange={(e) => {
                            setFiltroSelec(e.target.value); console.log(e.target.value)
                        }}>
                            <C.Option value="Autor" selected>Autor</C.Option>
                            <C.Option value="Titulo" >Título</C.Option>
                            <C.Option value="Editora">Editora</C.Option>
                        </C.Select>
                    </C.TituloFiltro>
                    <table>
                        <tbody>
                            <C.TR >
                                <C.TituloTD >N° REGISTRO </C.TituloTD>
                                <C.TituloTD>DATA </C.TituloTD>
                                <C.TituloTD>AUTOR</C.TituloTD>
                                <C.TituloTD>TÍTULO</C.TituloTD>
                                <C.TituloTD>VOLUME</C.TituloTD>
                                <C.TituloTD>EXEMPLAR</C.TituloTD>
                                <C.TituloTD>EDITORA</C.TituloTD>
                                <C.TituloTD>ANO</C.TituloTD>
                                <C.TituloTD>PRATELEIRA</C.TituloTD>
                                <C.TituloTD>ALUNO</C.TituloTD>
                                <C.TituloTD>DEVOLUÇÃO</C.TituloTD>
                            </C.TR>
                        </tbody>
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
                                    <C.TD>
                                        
                                    </C.TD>
                                    <C.TD></C.TD>
                                </C.TR>
                            </tbody>
                        </table>

                    ))}
                </C.TabelaLivrosListados>
            </C.HomeContainer>
        </>
    )
}