import React from "react";
import {
  MaBut,
  MaConImg,
  MaConOne,
  MaConTwo,
  MaHe,
  MaInput,
  MaInputCon,
  MaInputSub,
  MaSubTwo,
  MaWrapper,
} from "./Main.elements";
import Medical from "../../assets/medical.webp";

const Main = () => {
  return (
    <>
      <MaWrapper>
        <MaConOne>
          <MaConImg src={Medical} alt="" />
        </MaConOne>
        <MaConTwo>
          <MaSubTwo>
            <MaHe>Your Career Your Life</MaHe>
            <div>
              <div>
                <div>
                  <div>
                    <MaInputCon>
                      <MaInputSub>
                        <label htmlFor=""></label>
                        <MaInput
                          type="text"
                          placeholder="search jobs in health care"
                        />
                        <MaBut>
                          <i>
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="612.01px"
                              height="612.01px"
                              viewBox="0 0 612.01 612.01"
                              style={{
                                fill: "#005bbb",
                                height: "24px",
                                width: "24px",
                              }}
                            >
                              <g>
                                <g id="_x34__4_">
                                  <g>
                                    <path
                                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
        C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
        l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
        c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
        S377.82,467.8,257.493,467.8z"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </i>
                        </MaBut>
                      </MaInputSub>
                    </MaInputCon>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </MaSubTwo>
        </MaConTwo>
      </MaWrapper>
    </>
  );
};

export default Main;
