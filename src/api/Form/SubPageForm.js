 import React from 'react';
import Footer from '../../MainPage/Footer/Footer';
import Header from '../../MainPage/Header/Header';
import { MainvisualOne, SubVisualOne, SubVisualTwo } from './Layout/Data/Data';
import DescriptionForm from './Layout/DescriptionForm/DescriptionForm';
import Description from './Layout/DescriptionForm/page/Description';
import DescriptionMove from './Layout/DescriptionForm/page/DescriptionMove';
import DescriptionPayback from './Layout/DescriptionForm/page/payback/DescriptionPayback';
import Time from './Layout/DescriptionForm/page/Time/Time';
import Mainvisual from './Layout/MainVisual/MainvisualOne';

// 아몬드 페이지 Form
function SubPageForm () {
     return (
        <>
       <Header />
       <Mainvisual {...MainvisualOne} />
       <DescriptionForm />
       <Description /> 
       <DescriptionMove {...SubVisualOne} />
       <DescriptionPayback {...SubVisualTwo} />
       <Time />
       <Footer />
       </>
     );
 }


 export default SubPageForm;