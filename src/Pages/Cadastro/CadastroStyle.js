import styled from 'styled-components';

export const CadastroContainer = styled.div`
position: fixed;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:2px;
top:120px; 
left:20vw;
margin: auto;
padding:0 5%;
height:800px;
width:800px;
border: 1px solid rgb(0,0,0,0.2);
border-radius: 10px;
box-shadow: 2px 5px 16px 0px #0B325E;

`
export const InputLivro = styled.input`
height:35px;
width:90%;
border:1px solid rgb(0,0,0,0.2);
border-radius: 5px;
`
export const LabelLivro = styled.label`
display: flex;
flex-direction: column;
align-items:start;
justify-content: center;
width: 100%;
height: 75px;
font-size: 20px;
`
export const SubContainerCadastroLivro= styled.div`
display: flex;
align-items: center;
justify-content: center;
height:80px;
width:100%;
`
export const BotaoCadastro = styled.button`
height:40px;
width:120px;
background-color: green;
color:white;
font-size: 20px;
border-radius: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-top: 20px;
`
export const ImagemCapaLivro=styled.img`
height:150px;
width:150px;
`