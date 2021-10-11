import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  background: white;
  border-radius: 1em;
  padding: 1em;
`;

const Button = styled.button`
  width: 150px;
  background: brown;
  color: white;
  border: none;
  border-radius: 1em;
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

const Instruction = styled.p`
  color: #0000006f;
  border-bottom: 1px solid #0000006f;
`;

const Header = ({ onFetchFilms }) => {
  return (
    <Wrapper>
      <Instruction>Click for update movies</Instruction>
      <Button onClick={onFetchFilms}>Fetch movies</Button>
    </Wrapper>
  );
};

export default Header;
