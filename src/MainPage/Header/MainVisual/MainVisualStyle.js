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
   margin: 0px auto;
   display:block;
   padding:50px;
   text-align:center;
`;

export const FormHeaderP = styled.div`
  height:300px;
  display:inline-flex;
  justify-content:center;
  float:left;
  align-items: center;
  position:relative;
  margin-left:2%;
  margin-right:5;
  left:45%;
  right:0%;

 
 

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

export const Img = styled.img`
height:300px;
display:inline-flex;
justify-content:center;
float:left;
margin-left;20%;
align-items: center;
position:relative;
left:-180%;

&:hover {
  background:red;
  border:2px solid red;
  opacity:50%;
  transition:5s;
}
`;

export const ImgH1 = styled.div`
  color:red;
  float:left;
`

export const ImgDescription = styled.div`
   font:bold 18px/24px arial;
   color:red;
   display:inline-block;
   text-align:center;
   position:relative;
   top:400px;
   left:200px;
   right:200px;
   bottom:400px;

   &:hover{
     opacity:100%;
   }
`