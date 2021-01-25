import React,{ useState} from 'react';
 
import {PageNationWrapper,PageNationHeader,PageNationNumber,Page} from './PagenationStyle';

 

function Pagenation() {
    const [comp, setComp] = useState();
    
     return (
         <>
        <PageNationWrapper>
         <Page children={comp} /> 
            <PageNationHeader>
                <PageNationNumber>Prev</PageNationNumber>
                <PageNationNumber
                onClick={() => setComp()}>
                    1
                </PageNationNumber>
                <PageNationNumber
                onClick={() => setComp()}>
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