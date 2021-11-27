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

app.get("/movies/:id", async (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  const client = await createConnection();
  // const filteredMovie = movieDetails.find((mov)=> mov.id===id)
  //select await function ->right click->Refractor->Exract to function in module scope->give name(get movie by Id)
  const movie = await getMoviesById(client, id);
  console.log(movie);
  const notFound = { message: "Movie not found" };
  movie ? response.send(movie) : response.status(404).send(notFound);
});
app.delete("/movies/:id", async (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  const client = await createConnection();

  const movie = await deleteMovieById(client, id);
  console.log(movie);
  const notFound = { message: "Movie not found" };
  movie ? response.send(movie) : response.status(404).send(notFound);
});

app.post("/movies", async (request, response) => {
  const data = request.body;
  console.log(data);
  const client = await createConnection();

  const result = await addMovies(client, data);
  response.send(result);
});

app.put("/movies/:id", async (request, response) => {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  const client = await createConnection();

  const result = await updateMovieById(client, id, data);
  response.send(result);
});

app.get("/movies", async (request, response) => {
  console.log(request.query);
  let filter = request.query;
  if (filter.rating) {
    filter.rating = +filter.rating;
  }
  const client = await createConnection();
  const filteredMovies = await getMovies(client, filter);
  response.send(filteredMovies);
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

app.listen(PORT, () => console.log("App started on", PORT));
