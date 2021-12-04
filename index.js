// const express = require('express')
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { getMovieById, deleteMoviesById, insertMovies, updateMoviesById, getMovies } from "./helper.js";
import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
import  cors  from 'cors';

dotenv.config(); // to hide MONGO_URL password

const app = express();

const PORT = process.env.PORT || 9000;  

//process.env
const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = "mongodb://localhost";

app.use(express.json()) //parse body to json
app.use(cors())

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo connected");
  return client;
}
export const client = await createConnection();

app.get("/", (request, response) => {
  response.send("***");
});
// app.get("/movies",(request,response)=>{
//     response.send(movieDetails)
// }) 

//     let filteredMovies = movieDetails;

//     // const languageFilter = movieDetails.filter((mov)=> mov.language===language)
//     // const ratingFilter = movieDetails.filter((mov)=> mov.rating.toString()===rating)
//     // const languageRating = movieDetails.filter((mov)=> mov.language===language && mov.rating.toString()===rating)

// if(language){
//     filteredMovies = filteredMovies.filter((mov)=> mov.language===language)
//     }
//  if(rating){

//     filteredMovies = filteredMovies.filter((mov)=> mov.rating.toString()===rating)
//     }
//     response.send(filteredMovies)
// })
app.use('/movies', moviesRouter)
app.use('/users', usersRouter)
app.listen(PORT, () => console.log("App started on", PORT));



