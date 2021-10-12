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
  const [isAdded, setIsAdded] = useState(false);

  const fetchFilmsHandlerAPI = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setFilms([]);

    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('something went wrong !!!');
      }

      const data = await response.json();

      const updateFilmsDataAPI = data.results.map((filmData) => {
        return {
          id: filmData.episode_id,
          title: filmData.title,
          desc: filmData.opening_crawl,
          director: filmData.director,
          producer: filmData.producer,
          date: filmData.release_date,
          place: 'From Star Wars API',
        };
      });
      setFilms(updateFilmsDataAPI);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const fetchFilmsHandlerFireBase = async () => {
    setIsLoading(true);
    setError(null);
    setFilms([]);

    try {
      const response = await fetch(
        'https://react-httprequest-d5649-default-rtdb.europe-west1.firebasedatabase.app/films.json'
      );

      if (!response.ok) {
        throw new Error('something went wrong !!!');
      }

      const data = await response.json();
      console.log(data);

      const updateFilmsDataDB = [];

      for (const key in data) {
        updateFilmsDataDB.push({
          id: key,
          title: data[key].title,
          desc: data[key].desc,
          director: data[key].director,
          producer: data[key].producer,
          date: data[key].date,
          place: data[key].place,
        });
      }
      setFilms(updateFilmsDataDB);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFilmsHandlerAPI();
  }, [fetchFilmsHandlerAPI]);

  const addFilmHandler = async (filmsFromForm) => {
    setIsAdded(true);
    const response = await fetch(
      'https://react-httprequest-d5649-default-rtdb.europe-west1.firebasedatabase.app/films.json/',
      {
        method: 'POST',
        body: JSON.stringify(filmsFromForm),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setIsAdded(false);
  };

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
        <Header
          onFetchFilms={fetchFilmsHandlerAPI}
          onFetchFilmsDB={fetchFilmsHandlerFireBase}
          onAddFilmHandler={addFilmHandler}
          isAdded={isAdded}
        />
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
