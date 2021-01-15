import React from 'react';
import {
    HeaderWrapper,
    HeaderLeftWrapper,
    HeaderLeftH1,
    HeaderRightWrapper,
    HeaderRightInput,
    HeaderRightInput1
    } from './HeaderStyle'
import Mainvisual from './MainVisual/Mainvisual';

// 헤더 맨윗 메뉴 부분 담당
function Header() {
     return (
         <HeaderWrapper>
            <HeaderLeftWrapper>
             <HeaderLeftH1>빠른메뉴</HeaderLeftH1>
             <HeaderLeftH1>고객센터</HeaderLeftH1>
             </HeaderLeftWrapper>
             <HeaderRightWrapper>
               <HeaderRightInput type="Search" required />
               <HeaderRightInput1 type="Submit" value="검색" required/>     
            </HeaderRightWrapper> 
         </HeaderWrapper>
     );
 }


 export default Header;