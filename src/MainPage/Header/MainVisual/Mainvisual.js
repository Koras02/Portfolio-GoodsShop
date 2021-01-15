import React from 'react';
import {
    FormHeaderWrapper,
    FormHeaderBoard,
    FormHeaderH1,
    FormHeaderMenuWrapper,
    FormHeaderP,
    FormHeaderBoardH1
}  from './MainVisualStyle';


export function Mainvisual() {
     return (
        <FormHeaderWrapper>
           <FormHeaderBoard>
               <FormHeaderBoardH1>Goods&SHOP</FormHeaderBoardH1>
           </FormHeaderBoard>
           <FormHeaderMenuWrapper>
               <FormHeaderH1>HOME</FormHeaderH1>
               <FormHeaderP>SHOP</FormHeaderP>
               <FormHeaderP>카테고리</FormHeaderP>
               <FormHeaderP>종류별</FormHeaderP>
               <FormHeaderP>나라별 굿즈 상품보기</FormHeaderP>
               <FormHeaderP>상품평</FormHeaderP>
           </FormHeaderMenuWrapper>
        </FormHeaderWrapper>
     );
 }


 export default Mainvisual;