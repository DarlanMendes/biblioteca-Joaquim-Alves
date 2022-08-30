import styled from "styled-components";

export const HomeContainer = styled.div`
padding-top:120px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
height:100%;

`
export const InputPesquisa = styled.input`
height:60px;
width:80%;
padding-left: 20px;
border-radius: 10px;
font-size: 20px;
&::placeholder{
    font-size: 20px;
    
}
`
export const TabelaLivrosListados= styled.div`
padding:30px;
border:2px solid rgb(0,0,0,0.4);
border-radius: 9px;
height:60vh;
`

export const Select = styled.select`
margin-left: 10px;
background-color: blue;
color:white;
padding: 10px 20px;
border-radius: 4px;
font-size: medium;
`
export const Option = styled.option`
margin-left: 10px;
`

export const TituloFiltro = styled.h2`
font-size:30px;
color:blue;
`
export const TD = styled.td`
display: flex;
flex-direction: row;
font-size: 20px;
text-align: center;
justify-content: center;
align-items: center;
width:100px;
height:80px;
border:1px solid;
color: black;
border-radius:5px;
`
export const TituloTD = styled.td`
display: flex;
flex-direction: row;
font-size: 20px;
text-align: center;
justify-content: center;
align-items: center;
width:100px;
height:40px;
border:1px solid;
color: black;
border-radius:5px;
background-color: blue;
color: white;
`
export const TR = styled.tr`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;
`
