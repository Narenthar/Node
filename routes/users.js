import express from "express";
import bcrypt from "bcrypt";
import {
  getMovieById,
  deleteMoviesById,
  insertMovies,
  updateMoviesById,
  getMovies,
  insertUsers,
  getUsersByName
} from "../helper.js";

const router = express.Router();

router
  .route("/signup")
  .post(async (request, response) => {
    const {username,password} = request.body;
    const hassedpassword = await genPassword(password);
const userExist = await getUsersByName(username);

if(userExist){
    response.send({message: "user already exist"})
    return;
}

    const result = await insertUsers({username,password: hassedpassword})

console.log(hassedpassword)
    // console.log(data);
    // const result = await insertMovies(data);
    response.send(result);
  });




export const usersRouter = router;
async function genPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hassedpassword = await bcrypt.hash(password, salt);
    return hassedpassword;
}

