import React from "react";
import {
  ItLi,
  ItPara,
  ItSu,
  ItSub,
  ItUl,
  ItemBut,
  ItemButIc,
  ItemCon,
  ItemConFiv,
  ItemConFour,
  ItemConOne,
  ItemConSix,
  ItemConThr,
  ItemConTwo,
  ItemSa,
  ItemSat,
  ItemSubCon,
  ProCon,
  ProFilBut,
  ProFilCon,
  ProFilNum,
  ProFilSpan,
  ProHeCon,
  ProInp,
  ProInpBut,
  ProInpCon,
  ProMa,
  ProMaHe,
  ProMaSpan,
  ProSuCon,
  ProSubCon,
  ProWra,
  SkCon,
  SkTm,
  SkTmIc,
  SkTw,
  SkTwPa,
  SkTwPara,
  SkiAt,
} from "./Products.elements";
import {
  faSearch,
  faFilter,
  faMapMarkerAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <ProWra>
        <ProCon>
          <ProInpCon>
            <ProInp type="text" placeholder="Search Jobs" />
            <ProInpBut>
              <i>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{
                    display: "block",
                    color: "005bbb",
                    height: "24px",
                    width: "24px",
                  }}
                />
              </i>
            </ProInpBut>
          </ProInpCon>
          <ProFilCon>
            <ProFilBut>
              <i>
                <FontAwesomeIcon
                  icon={faFilter}
                  style={{
                    display: "block",
                    color: "005bbb",
                    height: "24px",
                    width: "24px",
                  }}
                />
              </i>
              <ProFilNum>1</ProFilNum>
              <ProFilSpan>Filters</ProFilSpan>
            </ProFilBut>
          </ProFilCon>
        </ProCon>
      </ProWra>
      <ProHeCon>
        <ProSubCon>
          <ProSuCon>
            <div></div>
            <ProMa>
              <ProMaHe>
                Found <span></span> <ProMaSpan>3458</ProMaSpan> <span></span>
                jobs
              </ProMaHe>
            </ProMa>
          </ProSuCon>
        </ProSubCon>
      </ProHeCon>
      <ItemCon>
        <ItemSubCon>
          <ItemSa>
            <ItemSat>
              <ItemConOne>
                <ItSub>
                  <ItPara>Travel</ItPara>
                  <ItUl>
                    <ItLi>Exclusive</ItLi>
                  </ItUl>
                </ItSub>
                <ItSu>Skilled</ItSu>
              </ItemConOne>
              <ItemConTwo>
                <SkiAt to={"product"}>Physical Therapist - Skilled</SkiAt>
              </ItemConTwo>
              <ItemConThr></ItemConThr>
              <ItemConFour></ItemConFour>
              <ItemConFiv>
                <SkCon>
                  <SkTm>
                    <SkTmIc>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{
                          color: "707070",
                          fill: "#707070",
                          stroke: "#707070",
                          marginRight: "8px",
                        }}
                      />
                    </SkTmIc>
                    Hammonton, NJ
                  </SkTm>
                  <SkTw>
                    <SkTwPara>
                      $1,649 <span>-</span> $1,949
                    </SkTwPara>
                    <SkTwPa>/wk *</SkTwPa>
                  </SkTw>
                </SkCon>
              </ItemConFiv>
              <ItemBut>
                <ItemButIc>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      display: "block",
                      color: "005bbb",
                      height: "20px",
                      width: "20px",
                      fill: "#666",
                    }}
                  />
                </ItemButIc>
              </ItemBut>
              <ItemConSix></ItemConSix>
            </ItemSat>
          </ItemSa>
        </ItemSubCon>
      </ItemCon>
    </>
  );
};

export default Products;
