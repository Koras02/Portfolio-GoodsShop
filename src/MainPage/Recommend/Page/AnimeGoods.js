 import React from 'react';
import { 
    AnimeGoodsWrapper,
    AnimeGoodsFormWrapper,
    AnimeGoodsImage,
    AnimeGoodsFormH1,
    // AnimeGoodsFormH2,
    AnimeGoodsFormH3,
    AnimeGoodsH1
} from './AnimeStyle';

export const AnimeGoods = ({
    img,img2,img3,img4,img5,
    title1,title2,title3,title4,title5,title6,title7,
    title8,title9,title10
}) => {
     return (
        <AnimeGoodsWrapper> 
            <AnimeGoodsFormWrapper>
                <AnimeGoodsH1>애니/굿즈</AnimeGoodsH1>
                <AnimeGoodsImage src={img}></AnimeGoodsImage>
                <AnimeGoodsImage src={img2}></AnimeGoodsImage>
                <AnimeGoodsImage src={img3}></AnimeGoodsImage>
                <AnimeGoodsImage src={img4}></AnimeGoodsImage>
                <AnimeGoodsImage src={img5}></AnimeGoodsImage>
            </AnimeGoodsFormWrapper>
            <AnimeGoodsFormWrapper>
            <AnimeGoodsFormH3>{title5}<br/>{title6}</AnimeGoodsFormH3>
            <AnimeGoodsFormH3>{title9}<br/>{title10}</AnimeGoodsFormH3>
            <AnimeGoodsFormH3>{title5}<br/>{title6}</AnimeGoodsFormH3>
            <AnimeGoodsFormH3>{title1}<br/>{title2}</AnimeGoodsFormH3>
            <AnimeGoodsFormH3>{title1}<br/>{title2}</AnimeGoodsFormH3>
            <AnimeGoodsFormH1></AnimeGoodsFormH1>
            </AnimeGoodsFormWrapper>
        </AnimeGoodsWrapper>
     );
 }


 export default AnimeGoods;