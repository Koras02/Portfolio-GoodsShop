//15 % 할인 form
import React, { useState } from 'react';
 
import {
    PercentWrapper,
    PercentH1,
    PercentP,
    PercentP2,
    PercentNumber,
    PercentButton
} from './style/PercentStyle';


export const homeAmondData = ({
    pay2,
    title1,
    description,
    title2
}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [number,setNumber] = useState(0);
 
    const onIncrease = () => {
        setNumber(number => number + 1);
    }

    const onDecrease = () => {
        setNumber(number => number - 1);
    }
     
   
    if(!number === -1) {
        return null
    }  
     return (
        <PercentWrapper>
            <PercentH1>{title1}</PercentH1>
            <PercentP>{pay2}</PercentP>
            <PercentH1>할인쿠폰 혜택</PercentH1>
            <PercentP>{description}</PercentP>
            <PercentH1>{title2}</PercentH1>
            <PercentP2>{number}</PercentP2>
            <PercentNumber onClick={onIncrease}>+</PercentNumber>
            <PercentNumber onClick={onDecrease}>-</PercentNumber>
            <PercentButton type="submit">구매하기</PercentButton>
            <PercentButton type="submit">선물하기</PercentButton>
        </PercentWrapper>
     );
 }


 export default homeAmondData;