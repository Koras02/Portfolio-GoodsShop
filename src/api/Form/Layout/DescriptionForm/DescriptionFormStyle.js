import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Description = styled.div`
width:100%;
height:90px;
color:#000;
overflow:hidden;
margin-top:0px;
margin-bottom:10px;
border-bottom:2px solid #000;
border-top:2px solid #000;
 
top:${({scrollNav}) => (scrollNav ? '0%': '-250%')};
position:${({scrollNav}) => (scrollNav ? 'fixed': 'relative')};
transition:${({scrollNav}) => (scrollNav ? '15s' : '25s')};
background:${({scrollNav}) => (scrollNav ? '#fff': '#fff')};
z-index:1;
`

export const Button1 = styled(LinkS) `
border: 1px solid #000;
left:50%;
position:relative;
background:${({scrollNav}) => (scrollNav ? 'red' : '#bfbfbf')};
padding:3rem 5rem;
font:bold 18px/100px arial;
margin-left:-500px;
margin-right:550px;
z-index:1; 
transition:${({scrollNav}) => (scrollNav ? '20s' : '15s')};

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