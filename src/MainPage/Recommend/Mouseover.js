import React, { useCallback, useState } from 'react';
import AnimeGoods from './Page/AnimeGoods';
import Bookmanga from './Page/Bookmanga';
import { animegoodsOne } from './Page/Data/Data';
import { bookObjThree, bookObjTwo } from './Page/images/BookImage';
import MovieDrama from './Page/MovieDrama';
import {
    RecommendWrapper, 
    RecommendH1,
    RecommendP1Link
} from './RecommandStyle';
 

export function MouseOver() {
    const [mouseover,setMouseover] = useState(true);
    const [mouseover2,setMouseover2] = useState(false);
    const [mouseover3,setMouseover3] = useState(false); 
    const [mouseover4,setMouseover4] = useState(false); 
    const [mouseover5,setMouseover5] = useState(false);
    const onMouseOver = useCallback(() => {
        setTimeout(() => {
            setMouseover(mouseover => !mouseover);
        },5000)
    },[])
    const onMouseEnter = useCallback(() => {
        setTimeout(() => {
            setMouseover(mouseover => !mouseover);
        },5000)
    },[])
     return (
        <RecommendWrapper>
        <RecommendH1>카테고리별 보기</RecommendH1>
        <RecommendP1Link activestyle={{ color: 'red' }}
        //1번에서 2번으로 전환 그후 2번에서 1번으로 전환 이상무
        onMouseEnter={() => setMouseover(true) / onMouseEnter}
        onMouseOverCapture={() => setMouseover4(false)}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onMouseOver={() => setMouseover2(false) ?? setMouseover3(false) / setMouseover5(false) / onMouseOver}
         // eslint-disable-next-line react/jsx-no-duplicate-props
        >도서/만화</RecommendP1Link>
        <RecommendP1Link 
        //2번에서 3번전환 이상무 
        onMouseOver={() => setMouseover(false)}
        onMouseOverCapture={() => setMouseover3(false) / setMouseover5(false)}
        onMouseMove={()=>setMouseover4(false)}
        onMouseEnter={() => setMouseover2(true) / setMouseover5(false)}
        >영화/드라마</RecommendP1Link>
        <RecommendP1Link
         //2번에서 3번시 전환하기 
         onMouseOver={() => setMouseover2(false) ?? setMouseover(false)}
         // eslint-disable-next-line react/jsx-no-duplicate-props
         onMouseOverCapture={() => setMouseover4(false) / setMouseover5(false)}
         onMouseEnter={() => setMouseover3(true)}
        >애니/굿즈</RecommendP1Link>
        <RecommendP1Link
         //3번에서 4번시 전환 
         onMouseOver={
         // eslint-disable-next-line react/jsx-no-duplicate-props
         () => setMouseover3(false) ?? setMouseover(false)}
         onMouseOverCapture={() => setMouseover5(false)}
         onMouseEnter={() => setMouseover4(true)}
         onMouseMoveCapture={() => setMouseover2(false)}
        >여행/티켓</RecommendP1Link>
        <RecommendP1Link
         onMouseOver={() => setMouseover4(false) / setMouseover(false)}
         onMouseMoveCapture={() => setMouseover3(false)}
         onMouseEnter={() => setMouseover5(true) / setMouseover2(false)}
        >정보/블로그</RecommendP1Link>
        <hr />
        {mouseover && (
            <Bookmanga {...bookObjTwo} />
        )}
        {mouseover2 && (
            <MovieDrama {...bookObjThree} />
        )}
        {mouseover3 && (
            <AnimeGoods {...animegoodsOne} />
        )}
        {mouseover4 && (
            <div>4번페이지</div>
        )}
        {mouseover5 && (
            <div>5번페이지</div>
        )}
    <hr />
    </RecommendWrapper>

     );
 }


 export default MouseOver;