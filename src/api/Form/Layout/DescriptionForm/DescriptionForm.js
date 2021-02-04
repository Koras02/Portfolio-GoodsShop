import React, { useEffect, useState } from 'react';
import './DescriptionForm.scss'
import {Button1} from './DescriptionFormStyle'
import Description from './page/Description';

function DescriptionForm() {
    const [ scrollNav, setScrollNav ] = useState();

    const changeNav = () => {
        if(window.scrollY > 100) {
          setScrollNav(false)
        } else {
            setScrollNav(true)
        }
    };      


    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

     return (
       <div className="descriptonForm" scrollNav={scrollNav}>
         <Button1 
         to="formP"
         smooth={true}
         duration={500}
         offset={-100}
         >상품정보
         </Button1>
         <Button1
         to="Go"
         smooth={true}
         >
         배송/안내
         </Button1>
         <Button1>
         배송상태 및 환불안내
         </Button1>
         <Button1>배송 시간</Button1>
         <Description /> 
       </div>
     );
 }


 export default DescriptionForm;