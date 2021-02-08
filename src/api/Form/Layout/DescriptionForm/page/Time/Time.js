 import React from 'react';
 import './Time.scss'

export function Time() {
     return (
       <div className="TimeWrapper" id="Time">
         <h1 className="TimeH1">
             배송시간
         </h1>
         <form className="TimeForm">
         <p className="TimeP0">
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
           </p>
         </p>
             <h1 className="Day">
                <p className="p">
                   배송 기간
                </p>
                <p className="p-right">
                  <p className="p-right-p3">-일반 배송지역 주문</p>
                  <p className="p-right-p4">-산재 지역 주문</p>
                  </p>
                  <p className="p-right-p1">
                    주문 완료후 2~3일 소요
                  </p>
                  <p className="p-right-p2">
                    주문 완료후 4~5일 소요
                </p>
             </h1>
         </form> 
       </div>
     );
 }


 export default Time;