import { applyActionCode, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import * as C from "./HomeStyle";
import lupa from '../../assets/lupa.png';
import Api from '../../Firebase';



export const Home = ({ setUser, setModalShowed, setLivroItemModal }) => {
    const auth = getAuth();
    const [json, setJson] = useState();

    const [inputFiltroPesquisa, setInputFiltroPesquisa] = useState();
    const [filtroSelec, setFiltroSelec] = useState('Autor');
    let CollectionRef = 'livro'
    let lista = [];
    let listaAlunos = []

    const lerBancoLivros = async () => {
        setJson([]);
        lista = []
        let livros = await Api.Read(CollectionRef);
        livros.forEach((doc) => {
            lista.push(doc.data());

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
                            setFiltroSelec(e.target.value);
                        }}>
                            <C.Option value="Autor" >Autor</C.Option>
                            <C.Option value="Titulo" >Título</C.Option>
                            <C.Option value="Editora">Editora</C.Option>
                        </C.Select>
                    </C.TituloFiltro>

                    <C.ContainerLivro  >

                        {json && json.map((valor, chave) => (
                            <C.AreaContainerLivro >
                                <div key={chave} >


                                    <C.ContainerLivroHome onClick={() => {
                                        setLivroItemModal(valor);
                                        setModalShowed(true)
                                    }}>
                                        <C.ImagemContainerLivro src={valor && valor.livros.capa} />
                                        <C.TextoContainerLivro>
                                            <C.LabelTextoLivro>
                                                N° Registro: {valor && valor.livros.nReg}
                                            </C.LabelTextoLivro>
                                            <C.LabelTextoLivro>
                                                Título: {valor && valor.livros.titulo}
                                            </C.LabelTextoLivro>
                                            <C.LabelTextoLivro>
                                                Autor: {valor.livros.autor}
                                            </C.LabelTextoLivro>
                                            <C.LabelTextoLivro>
                                                Editora: {valor && valor.livros.editora}
                                            </C.LabelTextoLivro>
                                        </C.TextoContainerLivro>

                                    </C.ContainerLivroHome>

                                </div>


                            </C.AreaContainerLivro>

                        ))}

                    </C.ContainerLivro>

                </C.TabelaLivrosListados>

            </C.HomeContainer>

        </>
    )
}