import React from 'react';
 
import {
    FormHeaderWrapper,
    FormHeaderBoard,
    FormHeaderH1,
    FormHeaderBoardH1,
    Img,
    ImgWrapper,
    FormCategory,
    ImgForm,
    ImgWrapper2,
    ImgDescription,
    ImgDescriptionH1,
 
}  from './MainVisualStyle';
 

const InfoSection = ({
    img,
    img2,
    img3
}) =>  { 
   
    return (
        <FormHeaderWrapper>
           <FormHeaderBoard>
               <FormHeaderBoardH1>Goods&SHOP</FormHeaderBoardH1>
           </FormHeaderBoard> 
        <FormCategory>
           <ImgWrapper>
           <FormHeaderH1>HOME</FormHeaderH1>
            <ImgForm>
             <ImgWrapper2>
               <Img to="/Pigure" src={img}/>
               <Img to="/Pigure" src={img2}/>
               <Img to="/Pigure" src={img3}/>
               <Img to="/Pigure" src={img3}/>
            <ImgDescription>
              <ImgDescriptionH1 to="/Pigure"> 피규어</ImgDescriptionH1>
              <ImgDescriptionH1>베스트 셀러</ImgDescriptionH1>
              <ImgDescriptionH1>피규어</ImgDescriptionH1>
              <ImgDescriptionH1>피규어</ImgDescriptionH1>
            </ImgDescription>
            </ImgWrapper2>
            </ImgForm>
           </ImgWrapper>
        </FormCategory>
        </FormHeaderWrapper>
     );
 }

 export default InfoSection;