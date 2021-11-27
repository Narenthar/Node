//movies


import express from "express";

const router = express.Router();
app.get("/movies/:id", async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const client = await createConnection();
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