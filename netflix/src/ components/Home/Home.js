import React, { useEffect, useState } from 'react';
//import NavBar from '../Navbar/navbar';
import MovieList from '../MovieList/MovieList';
import { Container, Row } from 'react-bootstrap';


function Home() {
    const [movies, setMovies] = useState();
    const fetchData = async () => {
        try {
          const response = await fetch('https://movie-library-ayat.herokuapp.com/trending');
          console.log( response);

          const data = await response.json();
          console.log(data);
          setMovies(data);
        } catch (err) {
            console.log("error", Error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
    
      return (
        <>
      
          <main>
            {
              <Container fluid className='main-container'>
                <Row className='flex-row'>
                  <MovieList movies={movies} />
                </Row>
              </Container>
            }
          </main>
        </>
      )
    }
    export default Home;
    