import React, { useEffect, useState } from 'react';
import './DescriptionForm.scss'
import {Button1,Description} from './DescriptionFormStyle'
// import Description from './page/Description';

export const DescriptionForm = ({ toggle, isOpen }) => {
    const [ scrollNav, setScrollNav ] = useState(true);

    const changeNav = () => {
        if(window.scrollY <= 1000) {
          setScrollNav(false)
        } else {
            setScrollNav(true)
        }
    };      

     
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

     return (
       <Description scrollNav={scrollNav} isOpen={isOpen} onClick={toggle}>
         <Button1 
         to="formP"
         smooth={true}
         duration={0}
         offset={-100}
         spy={true}
         >상품정보
         </Button1>
         <Button1
         to="Go"
         smooth={true}
         spy={true}
         duration={0}
         offset={-200}
         >
         배송/안내
         </Button1>
         <Button1
         to="payback"
         smooth={true}
         spy={true}
         duration={1000}>
         배송상태 및 환불안내
         </Button1>
         <Button1>배송 시간</Button1>
       </Description>
     );
 }


 export default DescriptionForm;