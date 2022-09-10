import * as C from './CadastroStyle';
import Api from '../../Firebase';
import { useState } from 'react';
import livro_capa from '../../assets/livro.jpg'
export const Cadastro = () => {

    const [livro, setLivro] = useState(
        { nReg: '', data: '', autor: '', titulo: '', volume: '', exemplar: '', editora: '', ano: '', prateleira: '', capa: livro_capa, aluno: '', devolucao: '' }
    )
    let collection = 'livro';
    const handleCadastroLivro = () => {
        Api.Update(collection, livro, livro.nReg).then(() => {
            alert("Livro cadastro com sucesso!");
        }).catch((error) => {
            alert( "Ocorreu um erro ao cadastrar o livro.");
            console.log(error);
        });
    }
    const carregaCapaLivro = async (e) => {
        console.log(e.target.files);
        let file = e.target.files[0];
        let base64 = await converteBase64(file);
        console.log(base64);
        let capa = 'capa';
        setLivro({ ...livro, [capa]: base64 })
    }
    const converteBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    return (
        <C.CadastroLivroContainer>
            <C.CadastroContainer>
            <C.LabelLivro style={{height:"250px"}}>
                Capa do livro:
                <C.ImagemCapaLivro src={livro.capa}/>
                <input type="file" placeholder='Insira a foto' onChange={(e)=>{
                    carregaCapaLivro(e)
                }}/>

            
                </C.LabelLivro>
                <C.SubContainerCadastroLivro>
                    <C.LabelLivro>
                        N° de Registro<C.InputLivro type="number" onChange={(e) => {
                            livro.nReg = e.target.value;
                            console.log(livro);
                        }} />
                    </C.LabelLivro>
                    <C.LabelLivro>
                        Data<C.InputLivro onChange={(e) => {
                            livro.data = e.target.value;
                        }} />
                    </C.LabelLivro>
                </C.SubContainerCadastroLivro>
                <C.SubContainerCadastroLivro>
                <C.LabelLivro>
                    Autor<C.InputLivro onChange={(e) => {
                        livro.autor = e.target.value;
                    }} />
                </C.LabelLivro>
                <C.LabelLivro>
                    Título<C.InputLivro onChange={(e) => {
                        livro.titulo = e.target.value;
                    }} />
                </C.LabelLivro>
                </C.SubContainerCadastroLivro>
                <C.SubContainerCadastroLivro>
                <C.LabelLivro>
                    Volume<C.InputLivro onChange={(e) => {
                        livro.volume = e.target.value;
                    }} />
                </C.LabelLivro>
                <C.LabelLivro>
                    Exemplar<C.InputLivro onChange={(e) => {
                        livro.exemplar = e.target.value;
                    }} />
                </C.LabelLivro>
                </C.SubContainerCadastroLivro>
                <C.SubContainerCadastroLivro>
                <C.LabelLivro>
                    Editora<C.InputLivro onChange={(e) => {
                        livro.editora = e.target.value;
                    }} />
                </C.LabelLivro>
                <C.LabelLivro>
                    Ano<C.InputLivro onChange={(e) => {
                        livro.ano = e.target.value;
                    }} />
                </C.LabelLivro>
                </C.SubContainerCadastroLivro>
                
                <C.LabelLivro style={{width:"106%",marginLeft:"5%"}}>
                    Prateleira e estante<C.InputLivro onChange={(e) => {
                        livro.prateleira = e.target.value;
                    }} />
                </C.LabelLivro>
                <C.BotaoCadastro onClick={handleCadastroLivro}>Cadastrar</C.BotaoCadastro>
                
            </C.CadastroContainer>

        </C.CadastroLivroContainer>
    )
}