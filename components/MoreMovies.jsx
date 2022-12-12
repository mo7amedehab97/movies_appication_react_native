import { View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { imageBaseUrl } from "../assets/Config";
import { primaryColor } from "../assets/Colors";
import Heart from "../assets/images/heart.svg";
import { Context } from "../Context/Context";
const MoreMovies = ({ MovieInfo, navigation }) => {
  const { setSingleMovie } = useContext(Context);
  return (
    <TouchableOpacity
      onPress={() => {
        setSingleMovie(MovieInfo);
        navigation.navigate("Details");
      }}
    >
      <View>
        <Image
          source={{
            uri: `${imageBaseUrl}${MovieInfo?.poster_path}`,
          }}
          resizeMode="cover"
          style={{
            width: 100,
            height: 145.92,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: primaryColor,
            borderRadius: 16,
            marginHorizontal: 16,
            marginVertical: 8,
            position: "relative",
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 15,
            right: 20,
            width: 30,
            height: 25,
            zIndex: 2,
          }}
          onPress={() => {
            console.log(MovieInfo?.id);
          }}
        >
          {MovieInfo?.id === 123435 ? (
            <Heart fill={"#FF8700"} />
          ) : (
            <Heart fill={"#fff"} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MoreMovies;
