import { useEffect } from 'react'
import * as C from './styled'
export const ModalLivro = ({ livroItemModal }) => {
    useEffect(() => {

    }, [])
    return (
        <C.ContainerLivro>
            <C.DetalhesLivro>
             N° Registro: {livroItemModal !== undefined && livroItemModal.livros.nReg}
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Título: {livroItemModal !== undefined && livroItemModal.livros.titulo}
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Autor: {livroItemModal !== undefined && livroItemModal.livros.autor}
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Editora: {livroItemModal !== undefined && livroItemModal.livros.editora}
            </C.DetalhesLivro>





        </C.ContainerLivro>
    )
}