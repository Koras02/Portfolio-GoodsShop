import React from 'react';
import '../styles/Description.scss';
import { 
  ListWrapper, 
  PaybackH1,
  Img, 
  DescriptionH1,
  DescriptionWrapper } from './DescriptionPayBackStyle';

export const SubVisualTwo = ({
  title,
  title2,
  title3,
  title4,
  title5,
  title6,
  img,
  img2,
  img3
}) => {
     return (
        <div className="paybackWrapper" id="payback">
           <h1 className="paubackh1">
           {title} 
           </h1>
           <div className="paybackWrapper2">
           <h1 className="paybackh2">
             {title2}
           </h1>
            <h1 className="paybackh4">
              {title3}    
             </h1>  
            <br />
             <h1 className="paybackh2">
             {title4}
           </h1>
            <h1 className="paybackh4">
              {title5}    
             </h1>  
             <h1 className="paybackh5">
              {title6}    
             </h1>  
             <ListWrapper>
                <PaybackH1>
                  반송절차
                </PaybackH1>
                <Img src={img} width={200}></Img>
                <Img src={img2} width={300}></Img>
                <Img src={img3} width={320}></Img>
                <DescriptionWrapper>
                <DescriptionH1>
                  환불신청후 처리되는데 2~3일 소요됩니다.
                </DescriptionH1>
                <DescriptionH1>
                  환불이 처리 되면 배송업체에서 수거하기위해 출발합니다
                </DescriptionH1>
                <DescriptionH1>
                  배송업체에서 환불물품을 수거해 갑니다.
                </DescriptionH1>
                </DescriptionWrapper>
             </ListWrapper>
           </div>
        </div>
     );
 }


 export default SubVisualTwo;