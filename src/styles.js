import styled from "styled-components";

export const MainTitle = styled.h1`
  font-family: HelveticaNeueLTStd-Th;
  font-size: 26px;
  font-weight: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin: 0 auto 44px auto;
  width: 74%;
`;

export const Main = styled.div`
  max-width: 1200px;
  margin: 100px auto 0 auto;
  display: flex;
  background-color: #fff;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ColOne = styled.div`
  width: 40%;
  margin-right: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ColTwo = styled.div`
  width: 41%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  display: block;
  margin: 0 auto;
`;
