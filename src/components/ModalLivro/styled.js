import styled from 'styled-components';

export const ContainerLivro= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:30px;
flex-wrap: wrap;
width: 600px;
margin-top: 200px;
`
export const DetalhesLivro = styled.label`
display: flex;
align-items: center;
height:40px;
width:80%;
font-size:30px;

`
export const InputInfoLivro = styled.input`
height:40px;
flex:1;
::placeholder{
    font-size: 30px;
    color:black;
    padding:20px;
}
margin-left: 10px;
border-radius:5px;
`
export const BotaoEditarCadastroLivro= styled.button`
height:80px;
width:200px;
border-radius: 5px;
font-size:30px;
background-color: green;
color: white;

`
export const BotaoConsultaAluno = styled.button`
height:80px;
width:200px;
border-radius: 5px;
font-size:30px;
background-color: rgb(0,200,200);
color: white;
`
export const CabecalhoEditeLivro=styled.h1`
font-size: 40px;
`
export const SelectAlunoLista = styled.select`
background-color: blue;
color: white;
height:80px;
font-size:20px;
padding: 10px 20px;
border-radius: 5px;
`
export const OptionAlunoLista = styled.option`
background-color: blue;
color:white;
height:80px;
font-size:20px;
padding: 10px 20px;
`
