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
async function insertUsers(data) {
  return await client
    .db("guviexample")
    .collection("users")
    .insertOne(data);
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

async function getUsersByName(username) {
  return await client
    .db("guviexample")
    .collection("users")
    .findOne({ username:username });
}

export { getMovieById, deleteMoviesById, insertMovies, updateMoviesById, getMovies, insertUsers,getUsersByName };