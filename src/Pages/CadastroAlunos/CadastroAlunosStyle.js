import styled from 'styled-components';

export const  ContainerCadastroAlunos = styled.div`
position: fixed;
display:flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap:2px;
top:150px; 
left:20vw;
margin: auto;
padding:50px 0px 50px 50px;
height:380px;
width:700px;
border: 1px solid rgb(0,0,0,0.2);
border-radius: 10px;
box-shadow: 2px 5px 16px 0px #0B325E;
`
export const ImagemAluno =styled.img`
height:100px;
width:100px;
border: 1px solid rgb(0,0,0,0.3);
`
export const SubContainerCadastroAlunos = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
width:100%;
margin: 0px 0 0 0;
`
export const InputAluno = styled.input`
height:35px;
width:80%;
border:1px solid rgb(0,0,0,0.2);
border-radius: 5px;
::placeholder{
    padding:0 15px;
}
`
export const InputSelectAluno = styled.select`
height:35px;
width:80%;
border:1px solid rgb(0,0,0,0.2);
border-radius: 5px;
`
export const OptionAluno = styled.option`
`
export const LabelAluno = styled.label`
display: flex;
flex-direction: column;
align-items:start;
justify-content: center;
margin: 0;
width: 100%;
height: 75px;
font-size: 20px;
`
export const BotaoCadastro = styled.button`
height:40px;
width:120px;
background-color: green;
color:white;
font-size: 20px;
border-radius: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin:20px 0% 10px 0%;
`