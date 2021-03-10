import React from "react";

import imageAnd1 from "../../assets/and_1.svg";
import imageOr from "../../assets/or.svg";
import styled from "styled-components";

const Block = (props) => {
  const { type } = props;

  switch (type) {
    case "OR":
      return <BlockSvg src={imageOr} />;
    case "AND":
      return <BlockSvg src={imageAnd1} />;
    default:
      return <BlockSvg></BlockSvg>;
  }
};

const BlockSvg = styled.img`
  height: 80px;
  width: 80px;
  border-color: rgb(0, 0, 0);
  border: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Block;
