import { client } from "./index.js";

async function getMovies(filter) {
  return await client
    .db("guviexample")
    .collection("movies")
    .find(filter).toArray();
}
async function updateMoviesById(id, data) {
  return await client
    .db("guviexample")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
async function insertMovies(data) {
  return await client
    .db("guviexample")
    .collection("movies")
    .insertMany(data);
}
async function deleteMoviesById(id) {
  return await client
    .db("guviexample")
    .collection("movies")
    .deleteOne({ id: id });
}
async function getMovieById(id) {
  return await client
    .db("guviexample")
    .collection("movies")
    .findOne({ id: id });
}

export { getMovieById, deleteMoviesById, insertMovies, updateMoviesById, getMovies };