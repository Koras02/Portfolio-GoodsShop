import React from 'react';
import {
  EventWrapper,
  EventWrapperH1,
  EventWrapperH2,
  EventForm,
  EventWrapperWrapper
  } from './EvnetStyle'

function Event() {
     return (
        <EventWrapper>
       <EventForm>  
         <EventWrapperWrapper> 
          <EventWrapperH1>Event</EventWrapperH1>
          <EventWrapperH2>Event</EventWrapperH2>
          <EventWrapperH2>Event</EventWrapperH2>
          <EventWrapperH2>Event</EventWrapperH2>
          <EventWrapperH2>Event</EventWrapperH2>
          </EventWrapperWrapper>
       </EventForm>
        </EventWrapper>
     );
 }


 export default Event;