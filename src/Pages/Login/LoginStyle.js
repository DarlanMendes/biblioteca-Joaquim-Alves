import styled from 'styled-components';
import biblioteca from "../../assets/biblioteca.png"
export const Container = styled.div`
height:500px;
width:500px;
display: flex;
flex-direction: column;
justify-content: center;
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
width:80%;
height:40px;
padding: 0px 10px;
background-color:#44F;
color:white;
font-size: 16px;
border-radius:8px;
`
