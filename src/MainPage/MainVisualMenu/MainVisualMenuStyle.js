import styled from 'styled-components';
import img from './Pic/Cart.jpeg';
import img2 from './Pic/download.jpeg';

export const MenuWrapper = styled.div`
  width:100%;
  margin:auto;
  text-align:center;
`;

export const MenuWrapperBox = styled.div`
 
  padding:20px;
  border:8px solid #000;

`
export const MenuWrapperH1 = styled.div`
  margin-left:50px;
  margin-top:30%;
  display:inline;
  padding:2px;
  padding-bottom:40px;
  padding-top:40px;
  font:bold 29px/24px arial;
  border-radius:100%;
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