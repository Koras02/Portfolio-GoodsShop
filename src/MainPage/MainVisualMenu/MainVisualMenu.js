import React from 'react';
import {MenuWrapper,MenuWrapperBox,MenuWrapperH1Links} from './MainVisualMenuStyle'


function MainVisualMenu() {
     return (
       <MenuWrapper>
          <MenuWrapperBox>
           <MenuWrapperH1Links to="/">도서/만화</MenuWrapperH1Links>
           <MenuWrapperH1Links>영화/드라마</MenuWrapperH1Links>
           <MenuWrapperH1Links>애니/굿즈</MenuWrapperH1Links>
           <MenuWrapperH1Links>소설/문학</MenuWrapperH1Links>
           <MenuWrapperH1Links>여행/티켓</MenuWrapperH1Links>
           <MenuWrapperH1Links>정보/블로그</MenuWrapperH1Links>
           </MenuWrapperBox>
       </MenuWrapper>
     );
 }


 export default MainVisualMenu;