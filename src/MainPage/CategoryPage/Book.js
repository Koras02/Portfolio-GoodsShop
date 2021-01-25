import React from 'react';
 
 
import { 
  CategoryWrapper,
  CategoryWrapperH1,
  CategoryWrapperP,
  CategoryForm,
  CategoryFormWrapper,
  CategoryFormH1
} from './BookStyle';

export function Book() {
     return (
        <CategoryWrapper>
          <CategoryWrapperH1>현재 인기 항목</CategoryWrapperH1>
          <CategoryWrapperP>현재 인기있는 항목를 모았습니다.</CategoryWrapperP>
          <CategoryFormWrapper>
          <CategoryForm>
            <CategoryFormH1>
            </CategoryFormH1>
          </CategoryForm>
          <CategoryForm>
          <CategoryFormH1>
          </CategoryFormH1>
          </CategoryForm>
          <CategoryForm>
          <CategoryFormH1>
            </CategoryFormH1>
          </CategoryForm>
          <CategoryForm>
          <CategoryFormH1>
          </CategoryFormH1>
          </CategoryForm>
          </CategoryFormWrapper>
        </CategoryWrapper>
     );
 }


 export default Book;