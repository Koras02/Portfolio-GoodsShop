import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const HeaderWrapper = styled.div`
  width:100%;
  height:120px;
  border-bottom:1px solid gray;
  background:#fff;
`;

export const HeaderH1 = styled(LinkR)`
   margin:28px;
   padding:10px;
   font:bold 18px/24px arial;
   color:#000;
   display:inline-flex;
   float:left;
   overflow:hidden;
   text-decoration:none;
`;

export const HeaderInput = styled.input`
   margin:40px auto;
   margin-left:0%;
   margin-right:1%;
   text-decroation:none;
   float:right;
`;

