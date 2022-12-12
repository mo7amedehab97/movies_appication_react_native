import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { primaryColor } from "../assets/Colors";
import { addMovie, createTable, db, imageBaseUrl } from "../assets/Config";
import Heart from "../assets/images/heart.svg";
import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.Atfal");
  return db;
}

const db = openDatabase();

const HeadMovie = ({ MovieInfo, index }) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    createTable();
  }, []);
  const idse = 736526;
  const getMovies = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Movies"),
        [],
        (tx, results) => {
          const len = results.rows.length;
          console.log(tx);
          setNum(len);
        };
    });
  };
  console.log(num);
  return (
    <TouchableOpacity
      onPress={() => {
        addMovie(MovieInfo);
        getMovies()
      }}
    >
      <View
        style={{
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 15,
            right: 25,
            width: 50,
            height: 40,
            zIndex: 2,
          }}
          onPress={() => {
            console.log(MovieInfo?.id);
          }}
        >
          {MovieInfo?.id === idse ? (
            <Heart fill={"#FF8700"} />
          ) : (
            <Heart fill={"#fff"} />
          )}
        </TouchableOpacity>

        <Image
          source={{
            uri: `${imageBaseUrl}${MovieInfo?.poster_path}`,
          }}
          resizeMode="cover"
          style={{
            width: 144.61,
            height: 210,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: primaryColor,
            borderRadius: 16,
            marginHorizontal: 17,
          }}
        />
        <Text
          style={{
            color: "#242A32",
            fontSize: 110,
            fontFamily: "MontserratSemiBold",
            position: "absolute",
            left: 10,
            top: 105,
            zIndex: 2,
            textShadowColor: "#0296E5",
            textShadowOffset: { width: 1, height: 0.5 },
            textShadowRadius: 10,
          }}
        >
          {index + 1}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeadMovie;
