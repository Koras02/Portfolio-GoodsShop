import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';


export const BookMangaWrapper = styled.div`
  width:100%
  height:800px;
  margin:auto;
  display:flex;
  positoin:relative;
  background:#fff;
  transition:10s;
`;

export const BookMangaFormWrapper = styled(LinkR)`
   width:100%;
   height:600px;
   position:relative;
   text-decoration:none;
   top:20px;
`;

export const BookMangaFormWrapperH1 = styled.div`
  text-align:center;
  font:bold 18px/24px arial;
  color:#000;
  display:block;
  text-decoration:none;
`;

export const BookMangaFormWrapperImage = styled.img`
  border:1px solid #000;
  display:inline;
  height:220px;
  margin-left:-630px;
  margin-right:800px;
  position:relative;
  left:50%;
  top:12%;

  @media screen and (max-width:1800px) {
    color:red;
    margin-left:-550px;
    margin-right:650px;
  }

  @media screen and (max-width:1600px) {
    color:red;
    margin-left:-460px;
    margin-right:550px;
  }
  @media screen and (max-width:1450px) {
    color:red;
    margin-left:-500px;
    margin-right:600px;
  }
`;


export const BookMangaFormH1Wrapper = styled.div`
  width:100%;margin:100px auto;

`

export const BookMangaFormH1 = styled(LinkR)`
  text-align:center;
  display:inline;
  position:relative;;
  left:50%; 
  color:#000;
  font:bold 16px/24px arial;
  text-decoration:none;
  border-top:180px solid rgba(255, 0, 0, -5);  
  border-left:0px solid red;
  margin-left:-690px;
  margin-top:-20px;
  margin-right:690px;
  
  &:nth-child(2) {
    margin-left:-520px;
  }
  &:nth-child(3) {
    margin-left:-450px;
  }
  &:nth-child(4) {
    margin-left:-500px;
  }
  &:nth-child(5) {
    margin-left:-650px;
  }

  &:hover{
    border-bottom: 4px solid #000;
 
  }
  @media screen and (max-width:1800px) {
    color:red;
    font:bold 14px/16px arial;
    &:nth-child(1) {
      margin-left:-570px;
    }
    &:nth-child(2) {
      margin-left:-600px;
    }
    &:nth-child(3) {
      margin-left:-500px;
    }
    &:nth-child(4) {
      margin-left:-580px;
    }
    &:nth-child(5) {
      margin-left:-650px;
    }
  }
  @media screen and (max-width:1600px) {
    color:orange;
    font:bold 14px/16px arial;
    &:nth-child(1) {
      margin-left:-500px;
    }
    &:nth-child(2) {
      margin-left:-600px;
    }
    &:nth-child(3) {
      margin-left:-500px;
    }
    &:nth-child(4) {
      margin-left:-600px;
    }
    &:nth-child(5) {
      margin-left:-680px;
    }
  }

  @media screen and (max-width:1500px) {
    color:blue;
    &:nth-child(2) {
      margin-left:-580px;
    }
    &:nth-child(3) {
      margin-left:-500px;
    }
    &:nth-child(4) {
      margin-left:-600px;
    }
    &:nth-child(5) {
      margin-left:-650px;
    }
  }

  @media screen and (max-width:1450px) {
    color:green;
    &:nth-child(1) {
      margin-left:-500px;
    }
    &:nth-child(2) {
      margin-left:-600px;
    }
    &:nth-child(3) {
      margin-left:-540px;
    }
    &:nth-child(4) {
      margin-left:-550px;
    }
    &:nth-child(5) {
      margin-left:-650px;
    }
  }


`;


export const BookPageH1 = styled.div`
  text-align;center;
  display:inline-flex;
  position:relative;
  left:50%;
  bottom:20px;
  margin-left:-100px;
  margin-right:200px;
  overflow:hidden;

  &:hover {
    color:blue;
  }
`




