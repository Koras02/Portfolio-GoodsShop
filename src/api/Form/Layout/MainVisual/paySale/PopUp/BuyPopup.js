 import React, { useState } from 'react';
 import {BuyPopupWrapper} from './style/BuyPopupStyle'



function BuyPopup() {
    const [close,setClose] = useState(false);
    const onClose = () => {
        setClose(close => !close);
    }
    if(!close === onClose) {
        console.log('닫기')
    }
    return (
         <>
        <BuyPopupWrapper>
           <div onClick={onClose}>X</div>
        </BuyPopupWrapper>
        </>
     );
 }


 export default BuyPopup;