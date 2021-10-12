import React, { useState } from 'react';

import HeaderForm from './HeaderForm';
import Button from '../Ui/Button';

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

const ButtonsArea = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Instruction = styled.p`
  color: #0000006f;
  border-bottom: 1px solid #0000006f;
`;

const Header = ({ onFetchFilms, onFetchFilmsDB, onAddFilmHandler, isAdded }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onAddFilm = (dataFromForm) => {
    onAddFilmHandler(dataFromForm);
  };

  const hideFormHandler = () => {
    setIsClicked(false);
  };

  let content;

  if (isClicked) {
    content = (
      <HeaderForm
        hideForm={hideFormHandler}
        onAddFilm={onAddFilm}
        isAdded={isAdded}
      />
    );
  } else {
    content = (
      <ButtonsArea>
        <Button onClick={onFetchFilms}>Fetch films from API</Button>
        <Button onClick={onFetchFilmsDB}>Fetch films from DB</Button>
        <Button onClick={() => setIsClicked(true)}>Add new film to DB</Button>
      </ButtonsArea>
    );
  }

  return (
    <Wrapper>
      {!isClicked && <Instruction>Click for fetch films or add new one</Instruction>}
      {content}
    </Wrapper>
  );
};

export default Header;
