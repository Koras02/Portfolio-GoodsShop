import React from 'react';
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
        </>
     );
 }


 export default Main;