import React from 'react';
import BookK from './Book/BookK';
import { bookObjOne } from './Book/Data';
import Book from './CategoryPage/Book';
import Header from './Header/Header'; 
import MainVisual from './MainVisual/MainVisual';
import MainVisualMenu from './MainVisualMenu/MainVisualMenu';

function Main() {
     return (
         <>
          <Header />
          <MainVisual />
          <MainVisualMenu />
          <Book/>
          <BookK {...bookObjOne}/>
        </>
     );
 }


 export default Main;