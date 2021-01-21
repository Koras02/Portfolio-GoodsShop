import styled from 'styled-components';
import img from './Pic/Cart.jpeg';
import img2 from './Pic/download.jpeg';
import {Link as LinkR} from 'react-router-dom';

export const MenuWrapper = styled.div`
  width:100%;
  margin:auto;
  text-align:center;
`;

export const MenuWrapperBox = styled.div`
 
  padding:20px;
  border:8px solid #000;

`
export const MenuWrapperH1 = styled(LinkR)`
  margin-left:90px;
  margin-top:30%;
  display:inline;
  padding:10px;
  padding-bottom:30px;
  padding-top:40px;
  padding-left:10px;
  font:bold 29px/24px arial;
  border-radius:100%;
  text-decoration:none;
  background:#fff;

  &:hover {
    color:red;
    transition:4s;
  }

  &:nth-child(1):hover {
    background-image: url(${img});
    background-transition:15s;
    color:#fff;
  }

  &:nth-child(2):hover {
    background-image: url(${img2});
    background-transition:15s;
    color:#fff;
  }
  `;

export const ToggleWrapper = styled.div`
  width:100%;
  height:500px;  
  float:left;
  display:block;
  margin:20px auto;
`