import React from 'react';
import Adware from './Ads/Adware';
import { SliderData } from './Ads/SliderData';
import BookK from './Book/BookK';
import { bookObjOne, bookObjTwo } from './Book/Data';
import Book from './CategoryPage/Book';
import Footer from './Footer/Footer';
import Header from './Header/Header'; 
import MainVisual from './MainVisual/MainVisual';
import MainVisualMenu from './MainVisualMenu/MainVisualMenu';
import Recommend from './Recommend/Recommend';


export function Main() {
     return (
         <>
          <Header />
          <MainVisual />
          <MainVisualMenu />
          <Book {...bookObjTwo} />
          <BookK {...bookObjOne}/>
          <Adware slides={SliderData}/>
          <Recommend slides={SliderData} />
          <Footer/>
        </>
     );
 }


 export default Main;