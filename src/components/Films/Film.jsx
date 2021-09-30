import React from 'react';

import styled from 'styled-components';

const LiWrapper = styled.li`
  background: tomato;
  border-radius: 1em;
  padding: 2em;
  margin-top: 2em;
  width: 80%;
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const Film = ({ title, desc, link }) => {
  return (
    <LiWrapper>
      <Title>{title}</Title>
      <p>{desc}</p>
      <p>{link}</p>
    </LiWrapper>
  );
};

export default Film;
