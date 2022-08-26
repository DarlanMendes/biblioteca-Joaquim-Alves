import styled from 'styled-components';

export const ContainerNavbar = styled.div`
position: fixed;
display: flex;
justify-content: end;
align-items: center;
gap:40px;
height:100px;
width:100%;
background-color:blue;
box-shadow: 2px 5px 16px 0px #0B325E;
`
export const LogOutButton = styled.button`
border:none;
color:white;
margin: 0 40px;
background-color: transparent;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 600; 
font-size: larger;
`
export const NavButton = styled.span`
a{
    text-decoration: none;
    font-size: larger;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-weight: 600;
}`