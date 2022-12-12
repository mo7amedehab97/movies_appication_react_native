import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { primaryColor } from "../assets/Colors";
import { Context } from "../Context/Context";
import Search from "../assets/images/Search.svg";
import Constants from "expo-constants";

const SearchInput = ({ navigation }) => {
  const { SECRET_KEY } = process.env;
  const secret = Constants.expoConfig.extra.secret;

  const {
    setStatus,
    setSearchResult,
    searchWord,
    setSearchWord,
  } = useContext(Context);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${SECRET_KEY}&language=en-US&page=1&include_adult=false&query=${searchWord}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  }, [searchWord]);
  
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3A3F47",
        borderWidth: 1,
        borderColor: primaryColor,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingVertical: 8,
        width: "90%",
        height: 42,
        justifyContent: "space-between",
        marginTop: "5%",
        marginHorizontal: "5%",
      }}
    >
      <View
        style={{
          width: "85%",
          marginLeft: 16,
        }}
      >
        <TextInput
          placeholder="search"
          placeholderTextColor="#67686D"
          style={{
            fontFamily: "PoppinsLight",
            fontSize: 14,
            lineHeight: 21,
            color: "#fff",
            letterSpacing: 1.5,
            width: "100%",
          }}
          onChangeText={(Text) => {
            setSearchWord(Text);
          }}
        />
      </View>
      <View
        style={{
          marginRight: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
            setStatus("Search");
          }}
        >
          <Search />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
