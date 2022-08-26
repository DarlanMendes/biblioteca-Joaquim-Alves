import styled from 'styled-components';
import biblioteca from "../../assets/biblioteca.png"
export const Container = styled.div`
height:500px;
width:500px;
border-radius: 10px;
border:2px solid rgb(0,0,0,0.2);
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
background-color: white;
margin: auto;
`
export const LoginPage = styled.div`
height:75.5vh;
width:100vw;
margin: 0;
padding:90px 0;
background: url(${biblioteca});
background-size: cover;


`
export const Input = styled.input`
width:80%;
height:40px;
padding: 0px 10px;
margin: 20px auto;
border:2px solid rgb(0,0,0,0.2);
border-radius: 4px;
`
export const Button = styled.button`
width:90%;
height:60px;
padding: 10px 20px;
background-color:#44F;
color:white;
font-size: 26px;
border-radius:8px;
`
export const Titulo = styled.h1`
display: flex;
align-items: center;
align-items: center;
font-size:40px;
color:blue;
margin: 80px 0px 0px 0px;
`