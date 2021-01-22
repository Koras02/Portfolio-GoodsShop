import styled from 'styled-components';
import Img from './Images/Amond.jpg';
import Img2 from './Images/Book2.jpeg'
import Img3 from './Images/Kniss.jpg'

export const CategoryWrapper = styled.div`
   width:100%;
   height:600px;
   margin:24px auto;
   border:1px solid red;
`;
   
 export const CategoryWrapperH1 = styled.div`
     margin:20px auto;
     text-align:center;
     font:bold 24px/32px arial;
   `;
   
   export const CategoryWrapperP = styled.div`
     text-align:center;
     font:bold 18px/28px arial;
     color:#fcc;
   `;

   export const CategoryFormWrapper = styled.div`
     text-align:center;
   `

   export const CategoryForm = styled.div`
     display:inline-flex;
     margin:100px auto;
     margin-left:20px;
     border:1px solid #000;

     @media screen and (max-width:1600px) {
      margin:80px 0px 0px 7px;
      border:1px solid green;
   }
   @media screen and (max-width:1200px) {
      margin:60px 0px 0px 10px;
      border:1px solid pink;
   }


     &:nth-child(1) {
        background-image: url(${Img});
        background-repeat:no-repeat;
        background-size:300px;
       &:hover {
          opacity:80%;
          transition:3s;
       }
     }
     &:nth-child(2) {
        background-image: url(${Img2});
        background-repeat:no-repeat;
        background-size:300px;
      &:hover {
         opacity:80%;
         transition:3s;
      }
     }
     &:nth-child(3) {
        background-image: url(${Img3});
        background-repeat:no-repeat;
        background-size:300px;
        &:hover {
         opacity:80%;
         transition:3s;
      }            
      &:nth-child(4) {
         background-image: url(${Img3});
         background-repeat:no-repeat;
         background-size:300px;
         &:hover {
          opacity:80%;
          transition:3s;
       }
       
     }
   `

   export const CategoryFormH1 = styled.div`
      padding:120px;
      margin:20px;
      overflow:hidden;

      @media screen and (max-width:1200px) {
         padding:70px;
      }

      @media screnn and (max-width:1600px) {
         padding:90px;
      }
   `