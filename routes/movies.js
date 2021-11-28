import express from "express";
import {
  getMovieById,
  deleteMoviesById,
  insertMovies,
  updateMoviesById,
  getMovies,
} from "../helper.js";

const router = express.Router();

router
  .route("/")
  .get(async (request, response) => {
    console.log(request.query);
    let filter = request.query;
    if (filter.rating) {
      filter.rating = +filter.rating;
    }
    const filteredMovies = await getMovies(filter);
    response.send(filteredMovies);
  })
  .post(async (request, response) => {
    const data = request.body;
    console.log(data);
    const result = await insertMovies(data);
    response.send(result);
  });

router
  .route("/:id")
  .get(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const movie = await getMovieById(id);
    console.log(movie);
    const notFound = { message: "Movie not found" };
    movie ? response.send(movie) : response.status(404).send(notFound);
  })
  .delete(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const movie = await deleteMoviesById(id);
    console.log(movie);
    const notFound = { message: "Movie not found" };
    movie ? response.send(movie) : response.status(404).send(notFound);
  })
  .put(async (request, response) => {
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    const result = await updateMoviesById(id, data);
    response.send(result);
  });

export const moviesRouter = router;
