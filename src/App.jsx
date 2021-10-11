import React, { Fragment, useEffect, useState, useCallback } from 'react';

import Header from './components/Header/Header';
import Films from './components/Films/Films';
//import { ExampleMovies } from './components/Films/ExampleMovies';

import GlobalStyle from './components/Ui/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

const P = styled.p`
  background: white;
  padding: 1em;
  color: tomato;
  font-size: 20px;
  border-radius: 0.5em;
`;

function App() {
  console.log('component running');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFilmsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('something went wrong !!!');
      }

      const data = await response.json();

      const updateFilmsData = data.results.map((filmData) => {
        return {
          id: filmData.episode_id,
          title: filmData.title,
          desc: filmData.opening_crawl,
          director: filmData.director,
          producer: filmData.producer,
          date: filmData.release_date,
        };
      });
      setFilms(updateFilmsData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchFilmsHandler();
  }, [fetchFilmsHandler]);

  let content;

  if (films.length > 0 && !isLoading) {
    content = <Films listOfFilms={films} />;
  } else if (error) {
    content = <P>{error}</P>;
  } else if (isLoading) {
    content = <P>Loading...</P>;
  } else content = <P>0 films found</P>;

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Header onFetchFilms={fetchFilmsHandler} />
      </Wrapper>
      <Wrapper>{content}</Wrapper>
    </Fragment>
  );
}

export default App;

// alternative way
/*
{!isLoading && films.length > 0 && <Films listOfFilms={films} />}
{!isLoading && films.length === 0 && !error && <P>0 films found</P>}
{!isLoading && error && <P>{error}</P>}
{isLoading && <P>Loading...</P>}
*/
