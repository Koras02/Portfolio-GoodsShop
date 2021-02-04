import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Button1 = styled(LinkS) `
border: 1px solid #000;
background: #fff;
position:relative;
left:50%;
display:inline-flex;
line-height:100%;
padding:5em;
padding-bottom:3rem;
margin-left:-600px;
margin-right:700px;
oveflow:hidden;
cursor: pointer;

&:hover {
    color:red;
    cursor: pointer
}

@media screen and (max-width:1600px) {
    color:red;
    margin-left:-420px;
    margin-right:500px;
    padding:2rem;
    overflow:hidden;
}
`