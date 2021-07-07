 import React from 'react';
 import {
     MovieDramaFromWrapper,
     MovieDramaWrapper,
     MovieDramaH1,
     MovieDramaImage,
     MovieDramaForm,
     MovieDramaFormH1,
     MovieDramaFormH1Wrapper
    } from './MovieDramaStyle'
export const MovieDrama = ({  
 img2,
 img3,
 img4,
 img5,
 img6,
 title,
 title2,
 title3,
 title4,
 title5,
}) => {
     return (
         <MovieDramaWrapper>
           <MovieDramaFromWrapper>
           <MovieDramaH1>영화/드라마</MovieDramaH1>
           <MovieDramaImage src={img2} to="/"></MovieDramaImage>
           <MovieDramaImage src={img3}></MovieDramaImage>
           <MovieDramaImage src={img4}></MovieDramaImage>
           <MovieDramaImage src={img5}></MovieDramaImage>
           <MovieDramaImage src={img6}></MovieDramaImage>
           <MovieDramaFormH1Wrapper>
           <MovieDramaFormH1 to="exit">{title}</MovieDramaFormH1>
           <MovieDramaFormH1 to="totoro">{title2}</MovieDramaFormH1>
           <MovieDramaFormH1 to="sen">{title3}</MovieDramaFormH1>
           <MovieDramaFormH1 to="black">{title4}</MovieDramaFormH1>
           <MovieDramaFormH1 to="camome">{title5}</MovieDramaFormH1>
           </MovieDramaFormH1Wrapper>
           </MovieDramaFromWrapper>
           <MovieDramaForm>

           </MovieDramaForm>
        </MovieDramaWrapper>
     );
 }


 export default MovieDrama;