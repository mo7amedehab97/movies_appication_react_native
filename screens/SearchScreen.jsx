import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import BackIcon from "../assets/images/arrow-left.svg";
import SavedMoveis from "../assets/images/Save 1.svg";
import { primaryColor } from "../assets/Colors";
import { ErrorPage, Footer, MovieItem, SearchInput } from "../components";
import { Context } from "../Context/Context";
import NoResults from "../assets/images/no-results 1.svg";
const SearchScreen = ({ navigation }) => {
  const { setStatus, searchResult, category } = useContext(Context);
  console.log(searchResult);
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
          justifyContent: "space-between",
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
          }}
        >
          Search
        </Text>
        <TouchableOpacity
          onPress={() => {
            setStatus("WatchLater");
            navigation.navigate("WatchList");
          }}
        >
          <SavedMoveis width={24} height={24} fill={"#EEE"} />
        </TouchableOpacity>
      </View>
      <SearchInput navigation={navigation} />

      {searchResult?.success !== false ? (
        <View
          style={{
            width: "100%",
            marginTop: "5%",
            paddingLeft: 32,
            marginBottom: 250,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchResult.results}
            renderItem={({ item }) => (
              <MovieItem MovieInfo={item} category={category} />
            )}
          />
        </View>
      ) : (
        <ErrorPage
          Img={NoResults}
          title="we are sorry, we can not find the movie :("
          description="Find your movie by Type title, categories, years, etc "
        />
      )}

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default SearchScreen;
