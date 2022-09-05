import styled from 'styled-components';

export const ContainerLivro= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap:30px;
flex-wrap: wrap;
height: 100%;
width: 100%;
`
export const DetalhesLivro = styled.label`
display: flex;
align-items: center;
height:40px;
width:80%;
font-size:40px;

`
export const InputInfoLivro = styled.input`
height:35px;
flex:1;
::placeholder{
    font-size: 30px;
    color:black;
    vertical-align: bottom;
}
margin-left: 10px;
`
