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
           <MovieDramaImage src={img2}></MovieDramaImage>
           <MovieDramaImage src={img3}></MovieDramaImage>
           <MovieDramaImage src={img4}></MovieDramaImage>
           <MovieDramaImage src={img5}></MovieDramaImage>
           <MovieDramaImage src={img6}></MovieDramaImage>
           <MovieDramaFormH1Wrapper>
           <MovieDramaFormH1>{title}</MovieDramaFormH1>
           <MovieDramaFormH1>{title2}</MovieDramaFormH1>
           <MovieDramaFormH1>{title3}</MovieDramaFormH1>
           <MovieDramaFormH1>{title4}</MovieDramaFormH1>
           <MovieDramaFormH1>{title5}</MovieDramaFormH1>
           </MovieDramaFormH1Wrapper>
           </MovieDramaFromWrapper>
           <MovieDramaForm>

           </MovieDramaForm>
        </MovieDramaWrapper>
     );
 }


 export default MovieDrama;