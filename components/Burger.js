import React from 'react';
import styled from 'styled-components';

// Souce of code for the animation: Adapted for React using Styled-Components
// https://codepen.io/RRoberts/pen/ZBYaJr

const Hamburger = styled.div`
  width: 22px;
  height: 18px;
  margin: 0;
  padding: 0;
  .hamburger .line{
    width: 22px;
    height: 2px;
    background-color: ${ props => props.color || "#ecf0f1"};
    display: block;
    margin: 4px 0px;
    transition: all 0.3s ease-in-out;
  }
  #hamburger-1.is-active .line {
    background-color: ${ props => props.expandedColor || "#ecf0f1"};
  }
  .hamburger:hover{
    cursor: pointer;
  }
  #hamburger-1.is-active .line:nth-child(2){
    opacity: 0;
  }
  #hamburger-1.is-active .line:nth-child(1){
    transform: translateY(6px) rotate(45deg);
  }
  #hamburger-1.is-active .line:nth-child(3){
    transform: translateY(-6px) rotate(-45deg);
  }  
`;

// rotation = (2*thickness + 2*margin)/2 = (thickness + margin)
// eg. Margin: 8px, Thickness: 5px = 8 + 5 = 13 degrees of rotation

// Height of Hamburger = 3*thickness + 4*margin

const burger = (props) => {
  return (
    <Hamburger expandedColor={props.expandedColor} color={props.color}>
      <div 
        className={"hamburger ".concat(props.expanded? " is-active" : "")} 
        id="hamburger-1" 
        onClick={props.toggle}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </Hamburger>
  );
};

export default burger;
