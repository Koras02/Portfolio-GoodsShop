 import React from 'react';
import Header from '../../MainPage/Header/Header';
import { MainvisualOne } from './Layout/Data/Data';
import Mainvisual from './Layout/MainVisual/MainvisualOne';


function SubPageForm () {
     return (
        <>
       <Header />
       <Mainvisual {...MainvisualOne} />
       </>
     );
 }


 export default SubPageForm;