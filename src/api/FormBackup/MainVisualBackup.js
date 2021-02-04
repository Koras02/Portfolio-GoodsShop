/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
 
 import './MainVisual.scss';
 import {
   MainVisualWrapper,
   MainVisualForm,
   Img
  } from './MainVisualStyle'
import MainvisualTwo from './motion/onClick';

 

export const MainvisualOne = ({
}) => {
     return (
       <MainVisualWrapper>
        <MainVisualForm>
        <Img className="Amond"></Img>
        <div className="title"></div>
        <div className="title2"></div>
        <div className="title2"></div>
        <div className="title2"></div>
        <div className="title2"></div>
        <div className="form"> 
        <div className="pay1"></div>
        <div className="pay2"></div>
        <div className="pay1"></div>
        <MainvisualTwo/>
        </div>
        </MainVisualForm>
       </MainVisualWrapper>
     );
 }


 export default MainvisualOne;