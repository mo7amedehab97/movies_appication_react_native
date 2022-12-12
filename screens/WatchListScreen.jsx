import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { primaryColor } from "../assets/Colors";
import BackIcon from "../assets/images/arrow-left.svg";
import { ErrorPage, Footer, MovieItem } from "../components";
import { Context } from "../Context/Context";
import FolderBox from "../assets/images/folder (1) 1.svg";
const WatchListScreen = ({ navigation }) => {
  const { setStatus, savedMovie, category } = useContext(Context);

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: primaryColor,
      }}
    >
      <View
        style={{
          marginTop: "20%",
          paddingHorizontal: 32,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setStatus("Home");
            navigation.navigate("Home");
          }}
        >
          <BackIcon width={24} height={24} />
        </TouchableOpacity>

        <Text
          style={{
            color: "#ececec",
            fontFamily: "MontserratSemiBold",
            fontSize: 16,
            lineHeight: 19.5,
            marginLeft: "30%",
          }}
        >
          Watch List
        </Text>
      </View>
      {savedMovie.length > 0 ? (
        <View
          style={{
            width: "100%",
            marginTop: "10%",
            paddingLeft: 32,
            marginBottom: 180,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={savedMovie.filter(
              (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
            )}
            renderItem={({ item }) => (
              <MovieItem MovieInfo={item} category={category} />
            )}
          />
        </View>
      ) : (
        <View
          style={{
            marginTop: 40,
          }}
        >
          <ErrorPage
            Img={FolderBox}
            title={"There is no movie yet!"}
            description={
              "Find your movie by Type title, categories, years, etc "
            }
          />
        </View>
      )}

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default WatchListScreen;
