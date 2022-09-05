import styled from 'styled-components';

export const ContainerModal = styled.div`
display:${props=>props.modalShowed?"flex":"none"};
justify-content: center;
align-items: center;
position: absolute;
top:0;
right:0;
bottom: 0;
left: 0;
z-index:30;
background-color:rgb(0,0,0,0.7);
height: 100vh;
width:100vw;
`
export const ContainerInfoLivro = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height:600px;
width:600px;
background-color: white;
border-radius: 25px;
font-size: 80px;
z-index:30;

`