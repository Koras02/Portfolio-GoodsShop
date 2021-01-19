import React  from 'react';
import {
    FormHeaderWrapper,
    FormHeaderBoard,
    FormHeaderH1,
    FormHeaderMenuWrapper,
    FormHeaderP,
    FormHeaderBoardH1,
    Img,
   
}  from './MainVisualStyle';
 


const InfoSection = ({
    img
}) =>  {
 
    return (
        <FormHeaderWrapper>
           <FormHeaderBoard>
               <FormHeaderBoardH1>Goods&SHOP</FormHeaderBoardH1>
           </FormHeaderBoard>
           <FormHeaderMenuWrapper>
               <FormHeaderH1>HOME</FormHeaderH1>
               <FormHeaderP src={img}> 
               <Img src={img}  />
               </FormHeaderP>
               <FormHeaderP src={img}> 
               <Img src={img} />
               </FormHeaderP>
               <FormHeaderP src={img}> 
               <Img src={img} />
               </FormHeaderP>
               <FormHeaderP src={img}> 
               <Img src={img} />
               </FormHeaderP> 
           </FormHeaderMenuWrapper>
        </FormHeaderWrapper>
    
     );
 }


 export default InfoSection;