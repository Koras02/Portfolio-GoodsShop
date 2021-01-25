import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const FooterWrapper = styled.div`
  width:100%;
  height:500px;
  margin:2px auto;
  position:relative;
  border-bottom:1px solid #000;
  top:100px;
  border:1px solid #000;
  background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  `;
  
  export const FooterHeaderTop = styled.div`
  width:100%;
  height:100px;
  text-align:center;
  background:gray;
  display:inline-flex;
  border-bottom:1px solid #000;
`;

export const FooterHeaderP = styled(LinkR)`
  position:relative;
  font:bold 18px/24px arial;
  left:50%;
  bottom:25px;
  text-decoration:none;
  color:#000;
  margin-top:60px;
  margin-left:-600px;
  margin-right:700px;

  &:hover { 
      transition:0.5s;
      color:#fc0;
  }
 `;

export const FooterHeaderH1 = styled.div`
   display:block;
   float:left;
   text-align:center;
   margin-left:-600px;
   margin-top:150px;
   font:bold 24px/24px arial;
   position:relative;
   left:50%;
`;

export const FooterHeaderP1 = styled.div`
   text-align:center;
   display:inline-flex;
   font:bold 20px/24px arial;
   position:relative;
   left:50%;
   margin-top:40px;
   margin-right:400px;
   margin-left:-280px;
`

export const FooterHeaderP2 = styled(LinkR)`
text-align:center;
display:inline-flex;
font:bold 20px/24px arial;
position:relative;
left:50%;
margin-top:40px;
margin-right:400px;
margin-left:-280px;
text-decoration:none;
color:#000;

&:hover {
    color:gray;
    transition:2s;
}
`

export const FooterHeaderPRight = styled.div`

`