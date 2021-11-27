// const express = require('express')
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  getMoviesById,
  deleteMovieById,
  addMovies,
  updateMovieById,
  getMovies,
} from "./helper.js";

dotenv.config(); // to hide MONGO_URL password

const app = express();

const PORT = 9000;

//process.env
const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = "mongodb://localhost";

app.use(express.json()); //parse body to json

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo connected");
  return client;
}
createConnection();

app.get("/", (request, response) => {
  response.send("Hello World");
});


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

app.listen(PORT, () => console.log("App started on", PORT));
