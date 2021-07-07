import '../../App.css'
import styled from 'styled-components';
import Image3 from './Images/Amond.jpg';
import Image4 from './Images/AmondBack.jpg';
import Image5 from './Images/Amond.jpg';
import Image6 from './Images/BongJunHo.jpg';
import Image7 from './Images/BongJunHo3.jpg';
import Image8 from './Images/YourPancreas.jpg';
import Image9 from './Images/YourPancreas2.jpg';
import {Link as LinkR} from 'react-router-dom'
 
export const BookSWrapper = styled.div`
   width:100%;
   height:800px;
   border:1px solid #000;
 `;

export const BookSHeader = styled.div`
   width:80%;
   margin:auto;
`;
export const BookSHeaderH1 = styled.div`
   text-align:center;
   font:bold 24px/28px arial;
   margin:20px auto;
`;

export const BookSHeaderP = styled.div`
   text-align:center;
   font:bold 18px/24px arial;
   margin:18px auto;
`;

export const BooksVisual = styled.div`
   text-align:center;
 
`;

export const BooksVisualForm = styled.div`
   display:inline-flex;
   margin:40px auto;
   margin-left:30px;
   border:1px solid #000;
   background-repeat:no-repeat;
   
  &:hover {
   opacity:100%;
   transition:2s;
  }

   &:nth-child(1) {
      background-image: url(${Image3});
 
      background-size:260px;
     
      &:hover {
        background-image:url(${Image4});
        opacity:100%;
        transition:1s;
     }
   }
    
   &:nth-child(2) {
        background-image:url(${Image5});
        background-size:260px;
     }
   
   &:nth-child(3) {
      background-image:url(${Image6});
      background-size:260px 340px;

      &:hover {
         background-image:url(${Image7});
         background-size:280px 380px;
      }
   }

   &:nth-child(4) {
       background-image:url(${Image8});
       background-size:280px 400px;

       &:hover {
          background-image:url(${Image9});
          background-size:260px 400px;
     }
   }

 @media screen and (max-width:1600px) {
    margin:2px;
 }
 

 @media screen and (max-width:1200px) {
   margin:0% 0% 0% -2%;
 }

`;
     
export const BooksVisualFormH1 = styled(LinkR)`
     padding:120px;
     margin:10px;
     overflow:hidden;
     padding-bottom:200px;
     display:block;
`;

export const FormWrapper = styled.div`
  width:60%;
  margin:auto;
  border:1px solid #000;
`

export const FormDescription = styled.div`
  width:100%;
  margin:auto;
  height:30px;
 
`
export const FormH1 = styled(LinkR)`
  display:inline-table;
  text-decoration:none;
  cursor: pointer;
  font:bold 16px/30px arial;
  margin-left:150px;
  margin-right:90px;
  color:#000;

  @media screen and (max-width:1300px) {
     margin-left:70px;
     margin-right:100px;
     margin-top:10px;
     border:1px solid red;
  }

  @media screen and (max-width:967px) {
     display:none;
  }
 
`;

export const FormP = styled.div`
font:bold 12px/24px arial;
font-family:Nunito-Sans;
display:inline-table;
margin-top:20px;
margin-left:150px;
margin-right:80px;

// 일반 데스크톱 
 @media screen and (max-width:1300px) {
     border:1px solid blue;
     margin-left:70px;
 }


 @media screen and (max-width:967px) {
    display:none;
 }
`;


export const FormPay = styled.div`
   width:100%;
   margin:auto;
`;


export const FormPayP = styled.div`
font:bold 10px/24px arial;
font-family:Nunito-Sans;
display:inline-table;
margin:10px 130px;
border-radius:10px;
padding:5px;
background:powderblue;


@media screen and (max-width:1300px) {
   border:1px solid red;
   margin:10px 95px;
}


@media screen and (max-width:967px) {
   display:none;
}
 
`;