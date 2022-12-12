import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { primaryColor } from "../assets/Colors";
import Home from "../assets/images/Home1.svg";
import Search from "../assets/images/Search.svg";
import WatchList from "../assets/images/Save.svg";
import HomeBlue from "../assets/images/HomeBlue.svg";
import SearchBlue from "../assets/images/SearchBlue.svg";
import SaveBlue from "../assets/images/SaveBlue.svg";
import { Context } from "../Context/Context";

const Footer = ({ navigation }) => {
  const { status, setStatus } = useContext(Context);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#0296E5",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 78,
        backgroundColor: primaryColor,
        zIndex: 2,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setStatus("Home");
          navigation.navigate("Home");
        }}
      >
        <View style={styles.iconHolder}>
          {status === "Home" ? <HomeBlue /> : <Home />}
          <Text
            style={{
              ...styles.iconTitle,
              color: status === "Home" ? "#0296E5" : "#67686D",
            }}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setStatus("Search");
          navigation.navigate("Search");
        }}
      >
        <View style={styles.iconTitle}>
          {status === "Search" ? <SearchBlue /> : <Search />}
          <Text
            style={{
              ...styles.iconTitle,
              color: status === "Search" ? "#0296E5" : "#67686D",
            }}
          >
            Search
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setStatus("WatchLater");
          navigation.navigate("WatchList");
        }}
      >
        <View style={styles.iconHolder}>
          {status === "WatchLater" ? <SaveBlue /> : <WatchList />}
          <Text
            style={{
              ...styles.iconTitle,
              color: status === "WatchLater" ? "#0296E5" : "#67686D",
            }}
          >
            Watch Later
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconHolder: {
    justifyContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
  },
  iconTitle: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
