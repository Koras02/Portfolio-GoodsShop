import React from 'react';
import {BookSWrapper,
    BookSHeader,
    BooksVisual,
    BooksVisualForm,
    BookSHeaderH1,
    BookSHeaderP,
    BooksVisualFormH1,
    FormDescription,
    FormH1,
    FormPay,
    FormP,
    FormPayP
} from './BookKStyle'

const InfoSection = ({
     title,
     title2,
     title3,
     person,
     person2,
     person3,
     pay1,
     pay2,
     pay3,
  }) => {
     return (
         //sdasdsada
         <>
        <BookSWrapper>
            <BookSHeader>
                <BookSHeaderH1>신상품</BookSHeaderH1>
                <BookSHeaderP>새로 출시된 작품을 구입 해보세요.</BookSHeaderP>
            </BookSHeader>
            <BooksVisual>
                <BooksVisualForm>
                <BooksVisualFormH1 to="/Portfolio3-GoodsShop/1/Amond"></BooksVisualFormH1>
                </BooksVisualForm>
                <BooksVisualForm>
                <BooksVisualFormH1 to="/Portfolio3-GoodsShop/2/Sese"></BooksVisualFormH1>
                </BooksVisualForm>
                <BooksVisualForm>
                <BooksVisualFormH1 to="/Portfolio3-GoodsShop/4/Bong"></BooksVisualFormH1>
                </BooksVisualForm>
                <BooksVisualForm>
                <BooksVisualFormH1 to="/Portfolio3-GoodsShop/1"></BooksVisualFormH1>
                </BooksVisualForm>
              <FormDescription>
                    <FormH1 to="/users">{title}</FormH1>
                    <FormH1>{title}</FormH1>
                    <FormH1 to="/">{title2}</FormH1>
                    <FormH1 to="/yourpan">{title3}</FormH1>
              </FormDescription>      
              <FormPay> 
                    <FormP>{person}</FormP>
                    <FormP>{person}</FormP>
                    <FormP>{person2}</FormP>
                    <FormP>{person3}</FormP>
             </FormPay>
             <FormPay>
                   <FormPayP>{pay3}</FormPayP>
                   <FormPayP>{pay1}</FormPayP>
                   <FormPayP>{pay2}</FormPayP>
                   <FormPayP>{pay1}</FormPayP>
             </FormPay>
            </BooksVisual>
        </BookSWrapper>
        </>
     );
};

 export default InfoSection;