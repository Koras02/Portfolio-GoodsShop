import styled from 'styled-components';

export const MainVisualWrapper = styled.div`
   max-width:200%;
   height:800px;
   oveflow:hidden;

   @media screen and (max-width:960px) {
     max-width:200%;
   }
`;

export const MainVisualForm = styled.div`
  max-width:200%;
  height:100px;
  border:1px solid #000;
  margin:10px auto;
  oveflow:hidden;
`;

 
export const Img = styled.img`
width:400px;
height:500px;
position:relative;
top:230px;
left:50%;
margin-left:-500px;
border-right:5px solid #000;
padding-left:0px;
padding-right:10px;
oveflow:hidden;

`