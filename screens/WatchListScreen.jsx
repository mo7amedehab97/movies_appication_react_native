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
import { Footer, MovieItem } from "../components";
import { Context } from "../Context/Context";


const WatchListScreen = ({ navigation }) => {
  const { setStatus } = useContext(Context);


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
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "dfsd" },
            { key: "3" },
            { key: "fdfg" },
            { key: "fdsf" },
            { key: "sfdfsa" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => <MovieItem />}
        />
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default WatchListScreen;
