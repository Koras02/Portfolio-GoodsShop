import React from 'react';
import {HeaderWrapper,HeaderH1,HeaderInput
} from './HeaderStyle'; 

 function Header() {
      return (
         <HeaderWrapper>
             <HeaderH1 to="/Portfolio3-GoodsShop">홈페이지</HeaderH1>
             <HeaderH1>상품문의</HeaderH1>
             <HeaderInput type="submit" value="검색"/>
             <HeaderInput type="search" value=""/>
         </HeaderWrapper>
      );
  }
 
 
  export default Header;