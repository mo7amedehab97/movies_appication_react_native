import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import {
  HeadMovie,
  MoreMovies,
  CategoryItem,
  SearchInput,
  Footer,
} from "../components";
import { Context } from "../Context/Context";
import Constants from "expo-constants";

const HomeScreen = ({ navigation }) => {
  const { SECRET_KEY } = process.env;
  const secret = Constants.expoConfig.extra.secret;

  const {
    category,
    setCategory,
    data,
    setData,
    genreID,
    genreMovie,
    setGenreMovie,
  } = useContext(Context);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${SECRET_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${SECRET_KEY}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const getMovieGenre = (genreId) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${SECRET_KEY}&with_genres=${genreId}
    `)
      .then((res) => res.json())
      .then((result) => setGenreMovie(result));
  };
  useEffect(() => {
    getMovieGenre(genreID);
  }, [genreID]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            lineHight: 27,
            marginLeft: 24,
          }}
        >
          What do you want to watch ?
        </Text>
      </View>
      <SearchInput navigation={navigation} />
      <View
        style={{
          height: 235,
          marginTop: "10%",
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data.results}
          renderItem={({ item, index }) => (
            <HeadMovie MovieInfo={item} index={index} />
          )}
        />
      </View>
      <View
        style={{
          marginTop: "5%",
          marginLeft: 12,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={category.genres}
          renderItem={({ item, index }) => (
            <CategoryItem index={index} name={item.name} genreIds={item.id} />
          )}
        />
      </View>
      <View
        style={{
          marginTop: "3%",
          marginBottom: 95,
        }}
      >
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={genreMovie.results}
          renderItem={({ item }) => <MoreMovies MovieInfo={item} />}
          style={{
            height: "32%",
          }}
        />
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#242A32",
  },
  title: {
    paddingTop: "15%",
  },
  text_title: {
    fontFamily: "PoppinsSemiBold",
    fontWeight: 600,
    color: "#fff",
    fontSize: 18,
    lineHight: 27,
  },
});
