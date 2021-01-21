 import React from 'react';
 import {
     EventWrapper,
     EventWrapperForm1,
     EventWrapperH1,
     EventWrapperP1,
     EventWrapper2,
     EventWrapper3,
     EventWrapperForm2,
     EventWrapperP,
     EventWrapperP2
    } from './EventStyle'


function Event() {

     return (
       <EventWrapper>
         <EventWrapper2>
           <EventWrapperH1>이벤트</EventWrapperH1>
        <EventWrapperP1>에벤트에 참여해 더 많은 혜택을 누려보세요.</EventWrapperP1>
           </EventWrapper2>
           <EventWrapper3>
               <EventWrapperForm1>
                   <EventWrapperForm2>이벤트Form</EventWrapperForm2>
                   <EventWrapperForm2>이벤트Form</EventWrapperForm2>
                   <EventWrapperForm2>이벤트Form</EventWrapperForm2>
                   <EventWrapperForm2>이벤트Form</EventWrapperForm2>
               <EventWrapperP> 
                    <EventWrapperP2>이벤트 내용</EventWrapperP2>
                    <EventWrapperP2>이벤트 내용</EventWrapperP2>
                    <EventWrapperP2>이벤트 내용</EventWrapperP2>
               
               </EventWrapperP>
               </EventWrapperForm1>
           </EventWrapper3>
       </EventWrapper> 
     );
 }


 export default Event;