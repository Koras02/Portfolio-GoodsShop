// 25% 할인 Form
import React from 'react';
import Motion from './Motion/Motion';
import {
    PercentWrapper,
    PercentH1,
    PercentP,
    PercentButton
} from './style/Percent2Style';


 export const homeAmondData = ({
    pay2,
    title1,
    description,
    title2
}) => {
     return (
        <PercentWrapper>
            <PercentH1>{title1}</PercentH1>
            <PercentP>{pay2}</PercentP>
            <PercentH1>할인쿠폰 혜택</PercentH1>
            <PercentP>{description}</PercentP>
            <PercentH1>{title2}</PercentH1>
            <Motion />
            <PercentButton type="submit">구매하기</PercentButton>
            <PercentButton type="submit">선물하기</PercentButton>
        </PercentWrapper>
     );
 }


 export default homeAmondData;