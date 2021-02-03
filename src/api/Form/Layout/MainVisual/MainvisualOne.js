/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
 import React, { useState } from 'react';
import { MainvisualThree } from '../Data/Data';
 import './MainVisual.scss';
 import {
   MainVisualWrapper,
   MainVisualForm,
   Img
  } from './MainVisualStyle'
import MainvisualTwo from './motion/onClick';

 

export const MainvisualOne = ({
 title,
 title2,
 title3,
 title4,
 title5,
 img,
 pay1,
 pay2,
 pay3,
 pay4
}) => {
     return (
       <MainVisualWrapper>
        <MainVisualForm>
        <Img className="Amond" src={img}></Img>
        <div className="title">{title}</div>
        <div className="title2">{title2}</div>
        <div className="title2">{title3}</div>
        <div className="title2">{title4}</div>
        <div className="title2">{title5}</div>
        <div className="form"> 
        <div className="pay1">{pay1}</div>
        <div className="pay2">{pay2}</div>
        <div className="pay1">{pay3}</div>
        <MainvisualTwo {...MainvisualThree} />
        </div>
        </MainVisualForm>
       </MainVisualWrapper>
     );
 }


 export default MainvisualOne;