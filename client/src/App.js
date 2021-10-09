import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data);
      console.log(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review
    }).then(() => { })

    setMovieList([
      ...movieReviewList,
      { movieName: movieName, movieReviews: review }
    ])
  }

  const deleteReview = (movie) => {
    Axios.delete('http://localhost:3001/api/delete/${movie}');
  }

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <input type="text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value)
        }}></input>
        <input type="text" name="review" onChange={(e) => {
          setReview(e.target.value)
        }}></input>

        <button onClick={ submitReview }>Submit</button>

        {movieReviewList.map((val) => {
          return <div className="card">
            <h1>
              Movie Name: {val.movieName}
            </h1>
            <p>
              Movie Review: {val.movieReviews}
            </p>

            <button onClick = {() => {deleteReview(val.movieName)}}> Delete </button>
            <input type="text" id="updateInput"/>
            <button> Update </button>

            </div>
        })}
      </div>
    </div>
  );
}

export default App;
