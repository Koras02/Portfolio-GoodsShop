 import React from 'react';
 import {EventWrapper,EventWrapperForm1,EventWrapperP,EventWrapperH1,EventWrapperForm} from './EventStyle'


function Event() {
     return (
       <EventWrapper>
           <EventWrapperH1>이벤트</EventWrapperH1>
           <EventWrapperP>에벤트에 참여해 더 많은 혜택을 누려보세요.</EventWrapperP>
           <EventWrapperForm>
               <EventWrapperForm1>이벤트 Form</EventWrapperForm1>
               <EventWrapperForm1>이벤트 Form</EventWrapperForm1>
               <EventWrapperForm1>이벤트 Form</EventWrapperForm1>
               <EventWrapperForm1>이벤트 Form</EventWrapperForm1>
           </EventWrapperForm>
       </EventWrapper> 
     );
 }


 export default Event;