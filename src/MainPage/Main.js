import React from 'react';
import { homeObjOne } from '../Data/Data';
import Event from './Event/Event'; 
import Header from './Header/Header'; 
import Mainvisual from './Header/MainVisual/Mainvisual';
 

function Main() {
     return (
        <>
          <Header />
          <Mainvisual {...homeObjOne} />
          <Event /> 
        </>
     );
 }


 export default Main;