import { useEffect } from 'react'
import * as C from './styled'
export const ModalLivro = ({ livroItemModal }) => {

    return (
        <C.ContainerLivro>
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
                Autor: {livroItemModal !== undefined && livroItemModal.livros.autor}
            </C.DetalhesLivro>
            <C.DetalhesLivro>
                Editora: {livroItemModal !== undefined && livroItemModal.livros.editora}
            </C.DetalhesLivro>





        </C.ContainerLivro>
    )
}