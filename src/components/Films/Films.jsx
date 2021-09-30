import React from 'react';

import Film from './Film';

import styled from 'styled-components';

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  background: white;
  border-radius: 1em;
  width: 80%;
  padding: 1em;
  list-style: none;
`;

const Films = ({ listOfFilms }) => {
  return (
    <UlWrapper>
      {listOfFilms.map((element) => {
        return (
          <Film
            key={element.id}
            title={element.title}
            desc={element.desc}
            link={element.link}
          />
        );
      })}
    </UlWrapper>
  );
};

export default Films;
