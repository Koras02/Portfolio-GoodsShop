// 할인 버튼 구현
import React, { useState } from 'react';
import '../MainVisual.scss';

export const MainvisualTwo = ({
    pay4,
    pay5
}) => {
    const [mouseclick,setClick] = useState(true);
    const [mouseclick2,setClick2] = useState();
    const onClick = () => {
       if(!onClick2 !== onClick) {
         setClick2(false);
         setClick(true)
       }
     }
     const onClick2 = () => {
      if(!onClick !== onClick2) {
       setClick2(true);
       setClick(false)
     }
   }

     return (
         <>
        <button className="button" onClickCapture={onClick}>{pay4}</button>
        <button className="button" onClickCapture={onClick2}>{pay5}</button>
        <div className="MouseForm">
        {mouseclick && 
          <div>15% 할인</div>
        } 
        {mouseclick2 && 
        <div>25% 할인</div>}
        </div>
        </>
     );
 }


 export default MainvisualTwo;