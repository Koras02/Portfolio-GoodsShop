import React from 'react';
import {BookSWrapper,
    BookSHeader
    ,BooksVisual,
    BooksVisualForm,
    BookSHeaderH1,
    BookSHeaderP,
    BooksVisualFormH1
} from './BookKStyle'

function BookK() {
     return (
        <BookSWrapper>
            <BookSHeader>
                <BookSHeaderH1>신상품</BookSHeaderH1>
                <BookSHeaderP>새로 출시된 작품을 구입 해보세요.</BookSHeaderP>
            </BookSHeader>
            <BooksVisual>
                <BooksVisualForm>
                <BooksVisualFormH1></BooksVisualFormH1>
                </BooksVisualForm>
                <BooksVisualForm>
                <BooksVisualFormH1></BooksVisualFormH1>
                </BooksVisualForm>
                <BooksVisualForm>
                <BooksVisualFormH1></BooksVisualFormH1>
                </BooksVisualForm>
                <BooksVisualForm>
                <BooksVisualFormH1></BooksVisualFormH1>
                </BooksVisualForm>
            </BooksVisual>
        </BookSWrapper>
     );
 }


 export default BookK;