import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"; 

import UpdateForm from "./Movies/UpdateForm.js";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [List, setList] = useState({movies: []});

  console.log("List", List)
  
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route 
        exact path="/" 
        render= {props =>{
          return <MovieList {...props} setList={setList}/>}}
      />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
        path="/update-movie/:id"
        render={props => {
        return <UpdateForm {...props} setList={setList} List={List} />}
        }
      />

    </>
  );
};

export default App;
