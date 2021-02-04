 import React from 'react';
import Header from '../../MainPage/Header/Header';
import { MainvisualOne, SubVisualOne } from './Layout/Data/Data';
import DescriptionForm from './Layout/DescriptionForm/DescriptionForm';
import DescriptionMove from './Layout/DescriptionForm/page/DescriptionMove';
// import DescriptionMove from './Layout/DescriptionForm/page/DescriptionMove';
import Mainvisual from './Layout/MainVisual/MainvisualOne';


function SubPageForm () {
     return (
        <>
       <Header />
       <Mainvisual {...MainvisualOne} />
       <DescriptionForm />
       <DescriptionMove {...SubVisualOne} />
       </>
     );
 }


 export default SubPageForm;