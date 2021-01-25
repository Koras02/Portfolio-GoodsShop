import styled from 'styled-components';
import {Link as LinkR}  from 'react-router-dom'

export const MovieDramaWrapper = styled.div`
   width:100%;
   height:600px;
   overflow:hidden;
`;

export const MovieDramaFromWrapper = styled.div`
 
`;

export const MovieDramaH1 = styled.div`
   text-align:center;
   margin:40px auto;
   font: bold 18px/24px arial;
`;

export const MovieDramaImage = styled.img`
    border:1px solid #000;
    display:inline;
    height:220px;
    margin-left:-630px;
    margin-right:800px;
    position:relative;
    left:50%;
    top:12%;

`;

export const MovieDramaForm = styled.div`
    width:100%;margin:200px auto;
`

export const MovieLink = styled(LinkR)`
   text-align:center;
   display:inline;
   position:relative;
   top:20%;
   text-decoration:none;
`;

export const MovieDramaFormH1 = styled(LinkR)`
text-align:center;
display:inline;
position:relative;;
left:50%; 
bottom:60px;
color:#000;
font:bold 16px/24px arial;
text-decoration:none;
border-top:200px solid rgba(255, 0, 0, -5);  
border-left:0px solid red;
margin-left:-590px;
margin-top:-20px;
margin-right:740px;

&:hover {
   border-bottom:1px solid #000;
}

`

export const MovieDramaFormH1Wrapper = styled.div`
  width:100%;margin:100px auto;
`;