
import * as C from './styled';
import { TiDelete } from 'react-icons/ti';
import Api from '../../Firebase';
import { useEffect, useState } from 'react';

export const ModalLivro = ({ livroItemModal, setModalShowed }) => {
    const [listaAlunos,setListaAlunos]=useState();
    const [alunoSelecionado,setAlunoSelecionado]=useState('')
    const lerBancoAlunos = async () => {
        let CollectionRef = 'aluno'
        let listaAluno = []
        let alunos = await Api.Read(CollectionRef);
        alunos.forEach((doc) => {
            listaAluno.push(doc.data());
           
        })
        setListaAlunos(listaAluno);
        console.log(listaAluno[0].alunos.foto)
    }
    useEffect(()=>{
     console.log(alunoSelecionado);
    },alunoSelecionado)
    
    return (
        <C.ContainerLivro>
            <TiDelete
                style={{ color: "red", fontSize: "40px", margin: "200px 10px -100px auto" }}
                onClick={() => setModalShowed(false)}
            />
            <C.CabecalhoEditeLivro>
                Editar items livro
            </C.CabecalhoEditeLivro>
            <C.DetalhesLivro>
                N° Registro:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.nReg}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Título:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.titulo}
                />

            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Autor:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.autor}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Editora:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.editora}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Data:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.data}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Volume:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.volume}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Exemplar:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.exemplar}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Editora:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.editora}
                />
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Prateleira:
                <C.InputInfoLivro
                    placeholder={livroItemModal !== undefined && livroItemModal.livros.prateleira}
                />
            </C.DetalhesLivro>
            <C.CabecalhoEditeLivro>
                Editar aluno
            </C.CabecalhoEditeLivro>
            <C.BotaoConsultaAluno onClick={()=>{console.log("clicou");lerBancoAlunos()}}>Consultar Aluno</C.BotaoConsultaAluno>
               {listaAlunos&& listaAlunos.map((valor,chave)=>(
                <C.SelectAlunoLista key={chave} onChange={(e)=>{setAlunoSelecionado(e.target.value)}}>
                    <option defaultValue=""/>
                    <C.OptionAlunoLista value={valor.alunos.matricula}>
                        Matrícula: {valor.alunos.matricula} 
                        - Nome:{valor.alunos.nome}
                       
                        
                        </C.OptionAlunoLista>

                </C.SelectAlunoLista>
               ))}
                  
                
                
           
            <C.BotaoEditarCadastroLivro>Salvar Edição</C.BotaoEditarCadastroLivro>



        </C.ContainerLivro>
    )
}