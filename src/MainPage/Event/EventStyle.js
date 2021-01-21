import styled from 'styled-components';

export const EventWrapper = styled.div`
  width:100%;
  height:10vh;
  min-height:300vh;
  border:1px solid #000;
  background:gray;
`;

export const EventWrapper2 = styled.div`
  max-width:30%;
  min-width:30%;
  margin:auto;
  border:1px solid green;
`;


export const EventWrapperH1 = styled.div`
margin:auto;
text-align:center;
font:bold 32px/48px arial;
color:powderblue;
margin-top:10px;
border:1px solid red;
`;
export const EventWrapperP1 = styled.div`
  font:bold 18px/24px arial;
  margin:20px auto;
  text-align:center;
`

 
export const EventWrapper3 = styled.div`
  width:80%;
  height:300px;
  margin:auto;
  border:1px solid blue;
  text-align:center;
`

export const EventWrapperForm1 = styled.div`
  width:100%;
  margin:0;
  padding:0;
  border:1px solid red;
`;

export const EventWrapperForm2 = styled.div`
  margin:1%;
  width:280px;
  height:200px;
  display:inline-flex;
  padding:0px;
  background:red;
  border:1px solid red;

  @media screen and (max-width:960px) {
    background:blue;
    margin:12px;
  }
  @media screen and (min-width:1024px) {
    background:blue;
    margin:60px 10px 0px -0px;

    @media screen and (min-width:1200px) {
      background:blue;
      margin:30px 60px 0px -40px;
      &:nth-child(4) {
        display:none;
      }
  }

`;
export const EventWrapperP2 = styled.div`
    max-height:100px;
    min-height:100px;
    height:100px;
    font:bold 18px/24px arial;
    text-align:center;  
    display:inline;
    padding:100px;
    marin-left:15px;
  `;
  
  export const EventWrapperP = styled.div`
  width:100%;
  float:left;
  border:1px solid green;
`;