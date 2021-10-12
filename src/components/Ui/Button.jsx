import React from 'react';

import styled from 'styled-components';

const Btn = styled.button`
  width: 150px;
  background: brown;
  color: white;
  border: none;
  border-radius: 1em;
  margin-left: 1em;
  padding: 1em;
  cursor: pointer;
  outline: none;
  transition: background-color 0.5s;

  &:hover {
    background: #7c1919;
  }
  &:focus {
    background: #7c1919;
  }
`;

const Button = ({ children, className, type, onClick }) => (
  <Btn className={className} type={type || 'button'} onClick={onClick}>
    {children}
  </Btn>
);

export default Button;
