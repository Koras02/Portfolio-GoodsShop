import styled from 'styled-components';
import {Link } from 'react-router-dom'

export const RecommendWrapper = styled.div`
  width:100%;
  height:600px;
`;

export const RecommendH1 = styled.div`
  text-align:center;
  margin:10px auto;
  display:block;
  font:bold 20px/26px arial;
`;

export const RecommendP1Link = styled(Link)`
  font:bold 18px/24px arial;
  margin-top:80px;
  text-decoration:none;
  margin-left:-400px;
  margin-right:500px;
  display:inline-table;
  text-align:center;
  position:relative;
  left:50%;
  border-bottom:5px solid #000;
  padding-bottom:1px;
  color: ${({ color }) => (color ? '#000' : 'blue')};
  transition:10s;
  
  @media screen and (max-width:1400px) {
    color:red;
    margin-left:-400px;
    margin-right:500px;
  }

  @media screen and (max-width:1024px) {
    color:red;
    margin-left:-400px;
    margin-right:500px;
  }
  
  }
  &:focus {
    color: ${({ onFocus }) => (onFocus ? 'gray' : '#000')};
    transition:0.5s;
  }
   
 
`;