 import React from 'react';
 import {MenuWrapper,MenuWrapperBox,MenuWrapperH1} from './MainVisualMenuStyle'

function MainVisualMenu() {
     return (
       <MenuWrapper>
          <MenuWrapperBox>
           <MenuWrapperH1>도서/만화</MenuWrapperH1>
           <MenuWrapperH1>영화/드라마</MenuWrapperH1>
           <MenuWrapperH1>애니/굿즈</MenuWrapperH1>
           <MenuWrapperH1>소설</MenuWrapperH1>
           <MenuWrapperH1>여행/티켓</MenuWrapperH1>
           <MenuWrapperH1>정보/블로그</MenuWrapperH1>
           </MenuWrapperBox>
       </MenuWrapper>
     );
 }


 export default MainVisualMenu;