import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProWra = styled.div`
  color: black;
  font-size: 24px;
  font-style: italic;
  padding: 20px 20px 15px;
  margin: 0 auto;
  min-width: 100%;

  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;
export const ProCon = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
  }
`;
export const ProInpCon = styled.div`
  background: #fff 0 0 no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12157);
  color: #666;
  font: normal normal 500 16px/18px Helvetica Now Text Regular;
  letter-spacing: 0.16px;
  margin: auto;
  width: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const ProInp = styled.input`
  padding: 20px 45px 20px 20px;
  border-radius: 10px;
  width: 100%;
  color: inherit;
  line-height: inherit;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  border: none;

  @media screen and (max-width: 768px) {
  }
`;
export const ProInpBut = styled.button`
  padding-left: 5px;
  position: absolute;
  right: 20px;
  top: 17px;
  padding-left: 5px;
  position: absolute;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  border: none;

  @media screen and (max-width: 768px) {
  }
`;
export const ProFilCon = styled.div`
  display: inline;
  margin: auto;
  padding-left: 20px;
  z-index: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const ProFilBut = styled.button`
  height: unset;
  padding: 11px 21px 2px;
  background: #fff 0 0 no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12157);
  white-space: nowrap;
  color: inherit;
  line-height: inherit;
  border: none;
  margin: 0;
  @media screen and (max-width: 768px) {
    height: unset;
    padding: 11px 21px 2px;
  }
`;
export const ProFilNum = styled.div`
  background: #062c57 0 0 no-repeat padding-box;
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  display: block;
  font: normal normal normal 10px/15px Helvetica Text;
  letter-spacing: 0.1px;
  opacity: 1;
  padding: 2px 5px;
  position: relative;
  right: -7px;
  text-align: center;
  top: -36px;

  @media screen and (max-width: 768px) {
    display: inline-block;
    left: -17px;
    right: unset;
    top: -18px;
    width: fit-content;
  }
`;
export const ProFilSpan = styled.span`
  color: #005bbb;
  display: none;
  font-family: Helvetica Now Display Medium;
  font-size: 24px;
  text-align: right;
  padding-left: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const ProHeCon = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 12px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
`;
export const ProSubCon = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const ProSuCon = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
  }
`;
export const ProMa = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;
export const ProMaHe = styled.div`
  color: #005bbb;
  font-family: Raleway;
  font-size: 22px;
  line-height: 36px;
  font-size: 28px;
  padding-top: 10px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ProMaSpan = styled.span`
  font-family: Helvetica Now Display XBold;
  font-size: 38px;
  line-height: 32px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 36px;
  }
`;
export const ItemCon = styled.div`
  border-radius: 0;
  box-shadow: none;
  border-radius: 7px;
  overflow: hidden;
  display: block;
  opacity: 1;
  background-color: rgba(255, 255, 255);

  @media screen and (max-width: 768px) {
  }
`;
export const ItemSubCon = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-right: 8px;
  }
`;
export const ItemSa = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const ItemSat = styled.div`
  position: relative;
  padding-left: 10px;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const ItemConOne = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
  }
`;

export const ItSub = styled.div`
  display: inline-flex;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItPara = styled.p`
  background-color: #003c69;
  border-radius: 5px;
  color: #fff;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font: normal normal 700 11px/19px Helvetica Now Text Regular;
  padding: 3px 10px 4px;
  text-transform: capitalize;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  text-align: left;

  @media screen and (max-width: 768px) {
  }
`;
export const ItUl = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const ItLi = styled.li`
  color: #5cb047;
  display: inline-flex;
  font: normal normal medium 12px/19px Helvetica Now Text Regular;
  font-size: 12px;
  padding-left: 12px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItSu = styled.div`
  color: #333;
  font: normal normal normal 12px/16px Helvetica Now Text Regular;
  letter-spacing: -0.24px;
  margin-bottom: -5px;
  padding-top: 5px;
  text-align: left;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
  }
`;
export const ItemConTwo = styled.div`
  display: inline-flex;
  margin-top: 4px;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;
  font-size: 14px;
  justify-content: space-between;
  line-height: 14px;
  color: rgba(102, 102, 102, var(--text-opacity));
  font-family: Helvetica Now Display Medium;

  @media screen and (max-width: 768px) {
  }
`;
export const SkiAt = styled(Link)`
  text-decoration: inherit;
  background-color: transparent;
  color: #005bbb;
  font: normal normal 700 18px/22px Helvetica Now Text Regular;
  letter-spacing: -0.27px;
  opacity: 1;
  text-align: left;
  display: block;
  margin-bottom: 4px;
  margin-right: 20px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItemConThr = styled.div`
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
  }
`;

export const ItemConFour = styled.div`
  display: block;
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
  }
`;

export const ItemConFiv = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;

export const SkCon = styled.div`
  display: inline-flex;
  margin-top: 4px;
  margin-bottom: 4px;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  line-height: 14px;
  width: 100%;
  color: rgba(102, 102, 102);
  font-family: Helvetica Now Display Medium;

  @media screen and (max-width: 768px) {
  }
`;
export const SkTm = styled.div`
  display: inline-flex;
  margin-bottom: 0;
  align-items: center;
  color: rgba(102, 102, 102);
  font-family: Helvetica Now Display Medium;
  font-size: 12px;
  line-height: 22px;

  @media screen and (max-width: 768px) {
  }
`;
export const SkTmIc = styled.i`
  font-family: Font Awesome\6 Pro;
  font-style: normal;

  @media screen and (max-width: 768px) {
  }
`;
export const SkTwPara = styled.p`
  color: #5caf47;
  font: normal normal 700 21px/22px Helvetica Now Text Regular;
  letter-spacing: 0;
  opacity: 1;
  text-align: right;

  @media screen and (max-width: 768px) {
  }
`;
export const SkTwPa = styled.p`
  color: #444;
  font: normal normal normal 12px/34px Helvetica Now Text Regular;
  letter-spacing: 0;
  opacity: 1;
  text-align: right;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
  }
`;
export const SkTw = styled.div`
  display: inline-flex;
  min-width: 210px;
  color: rgba(30, 119, 33);
  font-family: Helvetica Now Display Bold;
  font-size: 18px;
  line-height: 14px;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
  }
`;

export const ItemConSix = styled.div`
  background: #75787b 0 0 no-repeat padding-box;
  height: 1px;
  margin: 0 20px 10px 0;
  opacity: 0.25;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;

export const ItemBut = styled.button`
  right: 8px;
  top: 8px;
  border-radius: 100%;
  height: 36px;
  width: 36px;
  border-color: #0977a9;
  position: absolute;
  color: inherit;
  line-height: inherit;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  border: none;

  @media screen and (max-width: 768px) {
  }
`;
export const ItemButIc = styled.i`
  font-family: Font Awesome\6 Pro;
  font-style: normal;
  border: 0 solid #e2e8f0;

  @media screen and (max-width: 768px) {
  }
`;
