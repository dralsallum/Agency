import styled from "styled-components";

export const MaWrapper = styled.div`
  background: transparent linear-gradient(109deg, #0970b7, #4fbaeb) 0 0
    no-repeat padding-box;
  position: relative;
  box-sizing: border-box;
  height: 754px;

  @media screen and (max-width: 768px) {
    height: 704px;
  }
`;

export const MaConOne = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 0;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
export const MaConImg = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: left;
  max-width: 100%;
  display: block;
  vertical-align: middle;

  @media screen and (max-width: 768px) {
  }
`;
export const MaConTwo = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 55px 60px;
    margin: 0 auto;
  }
`;
export const MaSubTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const MaHe = styled.h1`
  opacity: 1;
  color: #fff;
  font-family: Raleway Medium;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  @media screen and (max-width: 768px) {
    font-size: 62px;
    line-height: 73px;
    padding-bottom: 40px;
  }
`;
export const MaInputCon = styled.div`
  width: 100%;
  padding: 8px;
  background: #fff 0 0 no-repeat padding-box;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    margin: 0;
    max-width: 500px;
  }
`;
export const MaInputSub = styled.div`
  display: flex;
  margin: auto;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 0;
    max-width: 500px;
  }
`;
export const MaInput = styled.input`
  border-radius: 10px;
  color: #666 !important;
  font: normal normal 500 16px/18px Helvetica Now Text Regular;
  letter-spacing: 0.16px;
  opacity: 1;
  padding: 13px 45px 13px 20px;
  text-align: left;
  width: 100%;
  overflow: visible;
  margin: 0;
  border: none;

  @media screen and (max-width: 768px) {
  }
`;
export const MaBut = styled.button`
  color: inherit;
  line-height: inherit;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  border: none;

  @media screen and (max-width: 768px) {
  }
`;
