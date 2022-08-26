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
height:800px;
width:800px;
border: 1px solid rgb(0,0,0,0.2);
border-radius: 10px;
box-shadow: 2px 5px 16px 0px #0B325E;
`
export const InputLivro = styled.input`
height:35px;
width:80%;
border:1px solid rgb(0,0,0,0.2);
border-radius: 5px;
`
export const LabelLivro = styled.label`
display: flex;
flex-direction: column;
align-items:start;
justify-content: center;
margin-left: 20%;
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
margin:10px 0% 10px 60%;
`