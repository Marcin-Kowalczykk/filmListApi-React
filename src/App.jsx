import React from 'react';

import Header from './components/Header/Header';
import Films from './components/Films/Films';

import GlobalStyle from './components/Ui/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

function App() {
  const exampleList = [
    {
      id: 1,
      title: 'Vikings',
      desc: 'history film about Norwey',
      link: '----',
    },
    {
      id: 2,
      title: 'Mens in black',
      desc: 'comedy about people and aliens',
      link: '----',
    },
    {
      id: 3,
      title: 'Mr Robot',
      desc: 'Hacking, IT, psycho',
      link: '----',
    },
  ];

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Films listOfFilms={exampleList} />
    </Wrapper>
  );
}

export default App;
