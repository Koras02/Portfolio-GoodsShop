import styled from 'styled-components';
import Image from './Images/Amond.jpg';
import Image2 from './Images/AmondBack.jpg';

export const BookSWrapper = styled.div`
   width:100%;
   height:1200px;
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
   margin:50px auto;
   margin-left:20px;
   border:1px solid #000;
 

   &:nth-child(1) {
      background-image: url(${Image});
      background-repeat:no-repeat;
      background-size:260px;
     
      &:hover {
        background-image:url(${Image2});
        opacity:100%;
        transition:1s;
     }
 
`

 
export const BooksVisualFormH1 = styled.div`
  padding:120px;
  margin:10px;
  overflow:hidden;
`