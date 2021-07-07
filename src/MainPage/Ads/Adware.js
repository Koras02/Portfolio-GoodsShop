import React, { useState } from 'react';
import './Slide.css';
import { SliderData } from './SliderData';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';


const Adware = ({ slides }) => {
    const [current, setCureent] = useState(0);
    const length = slides.length
  
    const nextSlide = () => {
        setCureent(current === length -     1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCureent(current === 0 ? length - 1 : current -1);
    };

    console.log(current);

     if(!Array.isArray(slides) || slides.length <= 0) {
         return null;
     }
     return (
         <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
         {SliderData.map((slide, index) => {
           return (
               <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img src={slide.image} alt='traval image' className="image" />
                  )}
               </div>
           ) 
         })}
         </section>
    );
};


 export default Adware;
