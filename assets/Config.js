import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase(
  {
    name: "SavedMovies",
    location: "default",
  },
  () => {},
  (error) => {
    console.log(error);
  }
);
const createTable = async () => {
  await db.transaction(async (tx) => {
    await tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "Movies " +
        "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Image TEXT, Title TEXT, Rate TEXT, Genre_id Text, Description TEXT)"
    );
  });
};

const addMovie = (data) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Movies (Image, Title, Rate, Genre_id, Description)  VALUES (?,?,?,?,?)",
      [
        data.poster_path,
        data.title,
        data.vote_average,
        data.genre_ids,
        data.description,
      ]
    );
  });
};
const getMovies = () => {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM Movies"),[],(tx,results)=>{
      const len = results.rows.length
    }
  });
};
const baseUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=ec1b8bb6b43b1b9440e2baff823ea37b";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export { baseUrl, imageBaseUrl, db, createTable, addMovie };
