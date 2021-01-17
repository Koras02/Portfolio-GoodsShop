import React from 'react';
import {
  EventWrapper,
  EventWrapperH1,
  EventWrapperH2,
  EventForm
  } from './EvnetStyle'

function Event() {
     return (
        <EventWrapper>
          <EventWrapperH1>Event</EventWrapperH1>
       <EventForm>  
          <EventWrapperH2>Event</EventWrapperH2>
          <EventWrapperH2>Event</EventWrapperH2>
          <EventWrapperH2>Event</EventWrapperH2>
          <EventWrapperH2>Event</EventWrapperH2>
       </EventForm>
          {/* <EventWrapperP>이전</EventWrapperP>
          {/* <EventWrapperP>1</EventWrapperP>
          <EventWrapperP>2</EventWrapperP>
          <EventWrapperP>3</EventWrapperP>
          <EventWrapperP>4</EventWrapperP>
          <EventWrapperP>다음</EventWrapperP> */} 
        </EventWrapper>
     );
 }


 export default Event;