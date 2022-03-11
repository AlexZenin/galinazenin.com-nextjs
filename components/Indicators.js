import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 4px;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: ${({ active }) =>
    active ? "white" : "rgba(255, 255, 255, 0.5)"};
`;

const DarkDot = styled(Dot)`
  background-color: ${({ active }) =>
    active ? "#2A4548" : "rgba(42,69,72,0.5)"};
`;

const Indicators = ({
  numberOfIndicators,
  activeIndicator,
  theme,
  handleClick,
}) => {
  let indicators = [];
  for (let i = 0; i < numberOfIndicators; i++) {
    indicators.push(
      <li>
        <Button onClick={() => handleClick(i)} key={i}>
          {theme === "dark" ? (
            <DarkDot active={i === activeIndicator}></DarkDot>
          ) : (
            <Dot active={i === activeIndicator}></Dot>
          )}
        </Button>
      </li>
    );
  }
  return <List>{indicators}</List>;
};

export default Indicators;
