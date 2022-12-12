import * as SQLite from "expo-sqlite";
import React from "react";

const db = SQLite.openDatabase("db.Atfal");

const createTable = async () => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists items (id integer primary key not null, done int, value text);"
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
  const [n, setn] = React.useState(0);
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM items"),
      [],
      (tx, results) => {
        const len = results.rows.length;
        setn(result);
        console.log(results);
      };
  });
};

const baseUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=ec1b8bb6b43b1b9440e2baff823ea37b";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export { baseUrl, imageBaseUrl, db, createTable, addMovie };
