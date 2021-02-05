import styled from 'styled-components';

export const Button = styled.button`
text-align:center;
margin-left:50px;
position:relative;
top:24px;
padding:10px;
 
opacity:80%;
font:bold 14px/24px arial;
overflow:hidden;
background: ${({mouseclick}) => (mouseclick ? 'gray': '#fff')};
color:${({mouseclick}) => (mouseclick ? '#fff': '#000')};
border:${({mouseclick}) => (mouseclick ? '3px solid blue': '3px solid #000')};
outline:none;
cursor: pointer;
 
`;
 