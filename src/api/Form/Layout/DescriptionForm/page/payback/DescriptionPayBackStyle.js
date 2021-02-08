import styled from 'styled-components';

export const ListWrapper = styled.div`
width:100%;
height:550px;
border:1px solid red;
margin:20px auto; 
`;


export const PaybackH1 = styled.div`
  text-align:center;
  margin-top:50px;
  margin-left:0px;
  font:bold 38px/30px arial;
`;

export const Img = styled.img`
 border:1px solid #000;
 position:relative;
 left:50%;
 top:150px;
 margin-left:-600px;
 margin-right:800px;
 padding:22px;
 
 @media screen and (max-width:1600px) {
   margin-left:-500px;
   margin-right:580px;
   padding:16px;
 }
`

export const DescriptionWrapper = styled.div`
  width:100%;
  height:500px;
  margin-top:180px;
`
export const DescriptionH1 = styled.div`
   text-align:center;
   float:left;
   position:relative;
   left:50%;
   top:0%;
   margin-left:-600px;
   margin-right:770px;
   font:bold 16px/24px arial;  
   @media screen and (max-width:1600px) {
    font:bold 13px/20px arial;
    margin-left:-500px;
    margin-right:588px;

    &:nth-child(3) {
      margin-left:300px;
      margin-top:-18px;
    }
  }
`;