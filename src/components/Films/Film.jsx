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

const Footer = styled.footer`
  background: white;
  border-radius: 0.5em;
  padding: 0.5em;
  font-size: 12px;
`;

const Description = styled(Footer)`
  text-align: start;
  font-size: 15px;
  margin-bottom: 0.2em;
`;

const Film = ({ title, desc, producer, date, director }) => {
  return (
    <LiWrapper>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Footer>
        <p>{`Director: ${director}`}</p>
        <p>{`Producers: ${producer}`}</p>
        <p>{`Date: ${date}`}</p>
      </Footer>
    </LiWrapper>
  );
};

export default Film;
