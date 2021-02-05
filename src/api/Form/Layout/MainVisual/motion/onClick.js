// 할인 버튼 구현
import React, {  useState } from 'react';
import '../MainVisual.scss';
import { homeAmondData,homeAmondData2 } from '../paySale/Data/Data';
import Percent1 from '../paySale/Percent1';
import Precent2 from '../paySale/Percent2';
import { Button } from './onClickStyle';
 
 
export const MainvisualTwo = ({
    pay4,
    pay5
}) => {
    const [mouseclick,setClick] = useState(true);
    const [mouseclick2,setClick2] = useState(false);
    const [isOpen, setIsOpen] = useState(false); 
    const onClick = () => {
       if(!onClick2 !== onClick) {
         setClick2(false);
         setClick(true)
         setIsOpen(!isOpen)
       }
     }
     const onClick2 = () => { 
      if(!onClick !== onClick2) {
       setClick2(true);
       setClick(false)    
       setIsOpen(!isOpen);
     }
     
     
   }

     return (
         <>
        <Button
        mouseclick={mouseclick}
        onClickCapture={onClick}
        >
        {pay4}
        </Button>
        <Button 
        className="button" 
        mouseclick={mouseclick2}
        onClickCapture={onClick2}
        changeColor={'yellow'}
        >
        {pay5}
        </Button>
        <div className="MouseForm">
        {mouseclick && 
          <Percent1 {...homeAmondData}/>
        } 
        {mouseclick2 && 
          <Precent2 {...homeAmondData2}/>
        }
        </div>
        </>
     );
 }


 export default MainvisualTwo;