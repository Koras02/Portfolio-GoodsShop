 import React from 'react';
 import './Time.scss'

export function Time() {
     return (
       <div className="TimeWrapper" id="Time">
         <h1 className="TimeH1">
             배송시간
         </h1>
         <form className="TimeForm">
         <p className="TimeP">
            <p className="TimeP1">배송안내</p>
         </p>
         <p className="TimeP">
           <p className="TimeP2">배송방법</p>
           <p className="TimeP3">순차배송</p>
           <p className="TimeP4">
            <p1 className="TimePb">
             배송비
             </p1>
             <p1 className="TimePb1">
               무료 배송  
             </p1>
             <p1 className="TimePb1">
               -도서 산간 지역 배송시 추가비용이 지불됩니다.
             </p1>
             <h1 className="Day">
             <p1 className="Day1">
               배송기간
             </p1>
             </h1>
           </p>
         </p>
         </form>
       </div>
     );
 }


 export default Time;