import styled from 'styled-components';

export const FormHeaderWrapper = styled.div`
  width:100%;
  max-width:100%;
  max-height:2000px;
  border:1px solid #000;
  display:inline-block;
  float:left;
`;

export const FormHeaderBoard = styled.div`
  height:300px;
  border:1px solid #000;
  background:#fff;
  color:#000;
  font:bold 24px/30px arial;
  overflow:auto;
`;
export const FormHeaderBoardH1 = styled.div`
   font:bold 30px/34px arial;
   margin: 70px auto;
   text-align:center;
   color:pink;
   overflow:auto;
`


export const FormHeaderMenuWrapper = styled.div`
height:600px;
border:2px solid #000;
background:#fff;
overflow:hidden;
`;

export const FormHeaderH1 = styled.div`
   font:bold 18px/24px arail;
   margin:auto;
   display:block;
   padding:50px;
   margin:20px 20px 20px 45%;
`;

export const FormHeaderP = styled.div`
  height:300px;
  display:inline-flex;
  border:1px solid #000;
  justify-content:center;
  float:left;
  margin-left:5px;
  align-items: center;
  padding: 0 5%;
  position:relative;
  left:18%;

  @media screen and (max-width:1540px) {
    margin:50px 10px -10px;
  }

  @media screen and (max-width:1024px) {
    width:10%;
    height:200px;
    padding:20px;
    margin-right:-20px;
  }
`;

