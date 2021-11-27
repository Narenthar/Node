async function getMovies(client, filter) {
  return await client
    .db("guviexample")
    .collection("movies")
    .find(filter)
    .toArray();
}
async function updateMovieById(client, id, data) {
  return await client
    .db("guviexample")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
async function addMovies(client, data) {
  return await client.db("guviexample").collection("movies").insertMany(data);
}
async function deleteMovieById(client, id) {
  return await client
    .db("guviexample")
    .collection("movies")
    .deleteOne({ id: id });
}
async function getMoviesById(client, id) {
  return await client
    .db("guviexample")
    .collection("movies")
    .findOne({ id: id });
}

export {
  getMoviesById,
  deleteMovieById,
  addMovies,
  updateMovieById,
  getMovies,
};
