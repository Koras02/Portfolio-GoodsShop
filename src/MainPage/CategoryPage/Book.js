 import React from 'react';
import { 
  CategoryWrapper, 
  CategoryWrapperHeader,
  CategoryWrapperH1,
  CategoryWrapperP} from './BookStyle';

export function Book() {
     return (
        <CategoryWrapper>
          <CategoryWrapperHeader>
          <CategoryWrapperH1>현재 인기 항목</CategoryWrapperH1>
          <CategoryWrapperP>현재 인기있는 굿즈를 모았습니다.</CategoryWrapperP>
          </CategoryWrapperHeader>
        </CategoryWrapper>
     );
 }


 export default Book;