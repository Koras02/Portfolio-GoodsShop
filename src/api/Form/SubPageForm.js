 import React from 'react';
import Header from '../../MainPage/Header/Header';
import { MainvisualOne, SubVisualOne, SubVisualTwo } from './Layout/Data/Data';
import DescriptionForm from './Layout/DescriptionForm/DescriptionForm';
import Description from './Layout/DescriptionForm/page/Description';
import DescriptionMove from './Layout/DescriptionForm/page/DescriptionMove';
import DescriptionPayback from './Layout/DescriptionForm/page/payback/DescriptionPayback';
import Mainvisual from './Layout/MainVisual/MainvisualOne';


function SubPageForm () {
     return (
        <>
       <Header />
       <Mainvisual {...MainvisualOne} />
       <DescriptionForm />
       <Description /> 
       <DescriptionMove {...SubVisualOne} />
       <DescriptionPayback {...SubVisualTwo} />
       </>
     );
 }


 export default SubPageForm;