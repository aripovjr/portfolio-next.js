import styled, { css } from "styled-components";

const Wrapper = styled.section`
  margin: 1rem;
  padding: 2rem;
  background-color: #f4f5fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 7px;
  box-shadow: 0px 0px 27px -17px rgba(66, 68, 90, 1);
`;

import React from "react";

function WrapperContainer(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default WrapperContainer;
