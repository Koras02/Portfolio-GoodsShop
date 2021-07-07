import React,{useState} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import {PageNationWrapper,PageNationHeader,PageNationNumber,Page} from './PagenationStyle';


function Pagenation() {
    const [comp, setComp] = useState(Page1);
     return (
         <>
        <PageNationWrapper>
         <Page children={comp} /> 
            <PageNationHeader>
                <PageNationNumber>Prev</PageNationNumber>
                <PageNationNumber 
                onClick={() => setComp(Page1)}>
                    1
                </PageNationNumber>
                <PageNationNumber
                onClick={() => setComp(Page2)}>
                    2
                </PageNationNumber>
                <PageNationNumber
                onClick={() => setComp()}>
                    3
                </PageNationNumber>
                <PageNationNumber
                onClick={() => setComp()}>
                    4
                </PageNationNumber>
                <PageNationNumber
                onClick={() => setComp()}>
                    5
                </PageNationNumber>
                <PageNationNumber>
                    Next
                </PageNationNumber>
            </PageNationHeader>
        </PageNationWrapper>
        </>
     );
 }


 export default Pagenation;