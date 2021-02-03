import styled from 'styled-components';

export const MainVisualWrapper = styled.div`
   max-width:200%;
   height:900px;
   border:1px solid #000;

   @media screen and (max-width:960px) {
     max-width:200%;
   }
`;

export const MainVisualForm = styled.div`
  max-width:200%;
  height:800px;
  border:1px solid #000;
  margin:10px auto;
`;

 
export const Img = styled.img`
width:400px;
height:500px;
position:relative;
top:200px;
left:50%;
margin-left:-600px;
border-right:5px solid #000;
padding-left:0px;
padding-right:10px;

`