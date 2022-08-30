import * as C from './CadastroStyle';
import Api from '../../Firebase';
import { useState } from 'react';
export const Cadastro =()=>{

    const[livro, setLivro]=useState(
        {nReg:'',data:'',autor:'',titulo:'', volume:'',exemplar:'',editora:'',ano:'',prateleira:'',aluno:'',devolucao:''}
    )
    let collection='livro';
    const handleCadastroLivro=()=>{
        Api.Update(collection,livro,livro.nReg).then(()=>{
            alert("Livro cadastro com sucesso!");
        }).catch(()=>{
            alert("Ocorreu um erro ao cadastrar o livro.")
        });
    }
    return(
        <>
        <C.CadastroContainer>
          <C.LabelLivro>
               N° de Registro<C.InputLivro type="number" onChange={(e)=>{
                livro.nReg= e.target.value;
                console.log(livro);
               }}/>
            </C.LabelLivro>  
          <C.LabelLivro>
              Data<C.InputLivro onChange={(e)=>{
                livro.data= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Autor<C.InputLivro onChange={(e)=>{
                livro.autor= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Título<C.InputLivro onChange={(e)=>{
                livro.titulo= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Volume<C.InputLivro onChange={(e)=>{
                livro.volume= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Exemplar<C.InputLivro onChange={(e)=>{
                livro.exemplar= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Editora<C.InputLivro onChange={(e)=>{
                livro.editora= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Ano<C.InputLivro onChange={(e)=>{
                livro.ano= e.target.value;}}/>
            </C.LabelLivro>  
          <C.LabelLivro>
               Prateleira<C.InputLivro onChange={(e)=>{
                livro.prateleira= e.target.value;}}/>
            </C.LabelLivro>  
            <C.BotaoCadastro onClick={handleCadastroLivro}>Cadastrar</C.BotaoCadastro>
            
        </C.CadastroContainer>
        
        </>
    )
}