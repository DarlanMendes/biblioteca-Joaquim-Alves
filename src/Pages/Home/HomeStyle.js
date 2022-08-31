import styled from "styled-components";

export const HomeContainer = styled.div`
padding-top:120px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: start;
align-items: center;
height:100%;
width:100vw;

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
width:80%;
overflow-y: scroll;
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


export const ContainerLivro = styled.div`
display: flex;

flex-wrap: wrap;
width:100%;
background-color: red;
align-items: center;
justify-content: center;
text-align: center;
`
export const AreaContainerLivro = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width:220px;
background-color: red;
`
export const ContainerLivroHome = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
height:300px;
width:200px;
background-color: white;
border:1px solid rgb(0,0,0,0.5);
border-radius: 5px;
`
export const ImagemContainerLivro =styled.img`
height:200px;
width:200px;
border-bottom: 0.5px solid rgb(0,0,0,0.5);
object-fit: cover;
`
export const TextoContainerLivro = styled.div`
height:100px;
width:200px;
display: flex;
flex-direction: column;
padding:10px 0px 10px 20px;
`
export const LabelTextoLivro = styled.label`
height:20px;
text-align: start;
`