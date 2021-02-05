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
    const [number,setNumber] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [plus, setPlus] = useState(false)
    
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
    const onPlus = () => {
        setPlus(plus => plus + 1)
    }
   
    const onDecrease = () => {
        setNumber(number => number - 1);
    }


     return (
        <PercentWrapper>
            <PercentH1>{title1}</PercentH1>
            <PercentP number={onPlus} plus={plus}>{pay2}</PercentP>
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