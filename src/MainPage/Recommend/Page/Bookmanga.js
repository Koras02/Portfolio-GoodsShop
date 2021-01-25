 import React from 'react';
import { 
  BookMangaWrapper,
  BookMangaFormWrapper,
  BookMangaFormWrapperH1,
  BookMangaFormWrapperImage,
  BookMangaFormH1,
  BookMangaFormH1Wrapper,
  BookPageH1
} from './BookMangaStyle';

 
const Bookmanga = ({
  img2,
  img3,
  img4,
  img5,
  img6,
  img8,
  title,
  title1,
  title3,
  title4
}) => {
     return (
       <BookMangaWrapper>
         <BookMangaFormWrapper>
            <BookMangaFormWrapperH1>도서/만화</BookMangaFormWrapperH1>
            <BookMangaFormWrapperImage src={img2} to="/EBS"></BookMangaFormWrapperImage>
            <BookMangaFormWrapperImage src={img3}></BookMangaFormWrapperImage>
            <BookMangaFormWrapperImage src={img8} ></BookMangaFormWrapperImage>
            <BookMangaFormWrapperImage src={img5}></BookMangaFormWrapperImage>
            <BookMangaFormWrapperImage src={img6}></BookMangaFormWrapperImage>
         <BookMangaFormH1Wrapper>
         <BookMangaFormH1 to="EBS">{title}</BookMangaFormH1>
         <BookMangaFormH1 to="Mom">{title1}</BookMangaFormH1>
         <BookMangaFormH1 to="Europe">{title4}</BookMangaFormH1>
         <BookMangaFormH1 to="100History">{title3}</BookMangaFormH1>
         <BookMangaFormH1 to="EBS X Alive">{title}</BookMangaFormH1>
         </BookMangaFormH1Wrapper>
         <BookPageH1>1</BookPageH1>
         <BookPageH1>2</BookPageH1>
         <BookPageH1>3</BookPageH1>
         <BookPageH1>4</BookPageH1>
         </BookMangaFormWrapper>
       </BookMangaWrapper>
     );
 }


 export default Bookmanga;