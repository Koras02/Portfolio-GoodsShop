// 주문 수량 form 
import React, {useState} from 'react';
import { PercentNumber, PercentP2 } from '../style/PercentStyle';

export function Motion() {
       // eslint-disable-next-line react-hooks/rules-of-hooks
       const [number,setNumber] = useState(1);
       // eslint-disable-next-line react-hooks/rules-of-hooks
       
       if(number > 10 ) {
           setNumber(number => number - 1);
           alert('최대 수량 입니다!')
       }
       if(number <= 0) {
           console.log('0')
           alert('최소 수량입니다.')
           setNumber(number => number + 1);
       }
    
       const onIncrease = () => {
           setNumber(number => number + 1);
       
       }
       const onDecrease = () => {
           setNumber(number => number - 1);
       }
     return (
         <>
        <PercentP2>{number}</PercentP2>
        <PercentNumber onClick={onIncrease}>+</PercentNumber>
        <PercentNumber onClick={onDecrease}>-</PercentNumber>
        </>
     );
 }


 export default Motion;