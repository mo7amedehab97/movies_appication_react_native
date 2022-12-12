import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { primaryColor } from "../assets/Colors";
import BackIcon from "../assets/images/arrow-left.svg";
import SavedMoveis from "../assets/images/Save 1.svg";
import RateIcon from "../assets/images/Vector.svg";
import Calender from "../assets/images/CalendarBlank.svg";
import Clock from "../assets/images/Clock.svg";
import Ticket from "../assets/images/Ticket.svg";
import { Reviews, AboutMovie, Cast } from "../components";
import { Context } from "../Context/Context";
import { imageBaseUrl } from "../assets/Config";
const DetailsScreen = ({ navigation }) => {
  const { status, setStatus, singleMovie, category } = useContext(Context);
  const [detailsStatus, setDetailsStatus] = useState("about movie");
  const IDS = singleMovie?.genre_ids[0];
  const catName = category?.genres.filter(({ id }) => id === IDS);
  const name = { ...catName };
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
            navigation.navigate("Home");
            setStatus("Home");
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
          Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WatchList");
            setStatus("WatchLater");
          }}
        >
          <SavedMoveis width={24} height={24} fill={"#EEE"} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,

          width: "100%",
          height: 211,
          marginTop: 32,
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: `${imageBaseUrl}${singleMovie?.backdrop_path}`,
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 210,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            width: "60%",
            marginHorizontal: 32,
            alignItems: "flex-end",
            position: "absolute",
            bottom: -60,
          }}
        >
          <Image
            source={{
              uri: `${imageBaseUrl}${singleMovie?.poster_path}`,
            }}
            resizeMode="cover"
            style={{
              width: 95,
              height: 120,
              borderRadius: 16,
            }}
          />
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: 18,
              lineHeight: 27,
              color: "#fff",
              flexWrap: "wrap",
              paddingHorizontal: 8,
              textTransform: "capitalize",
            }}
          >
            {singleMovie?.title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#252836",
            width: 55,
            height: 25,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 8,
            bottom: 11,
          }}
        >
          <RateIcon width={13} height={12.5} />
          <Text
            style={{
              color: "#FF8700",
              fontFamily: "MontserratSemiBold",
              lineHeight: 15,
              letterSpacing: 0.2,
              fontSize: 12,
              paddingLeft: 6,
            }}
          >
            {singleMovie?.vote_average}
          </Text>
        </View>
      </View>

      {/* details info  */}
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          justifyContent: "space-between",
          marginHorizontal: 36,
          alignItems: "center",
          height: 32,
          padding: 8,
        }}
      >
        <View
          style={{
            ...styles.infoHolder,
            borderRightColor: "#696974",
            borderRightWidth: 1.4,
            paddingRight: 16,
          }}
        >
          <Calender width={24} height={24} />
          <Text style={styles.textInfo}>
            {singleMovie?.release_date?.split("-")[0]}
          </Text>
        </View>
        <View
          style={{
            ...styles.infoHolder,
            borderRightColor: "#696974",
            borderRightWidth: 1,
            paddingRight: 16,
          }}
        >
          <Clock width={24} height={24} />
          <Text style={styles.textInfo}>185 minutes</Text>
        </View>

        <View style={styles.infoHolder}>
          <Ticket width={24} height={24} />
          <Text style={styles.textInfo}>
            {" "}
            {name?.[0]?.name === undefined ? "UnRegistered" : name?.[0]?.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 33,
          marginTop: "5%",
          marginLeft: 32,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => setStatus("about movie")}>
          <Text
            style={{
              ...styles.detailsListItem,
              borderBottomWidth: detailsStatus === "about movie" ? 4 : 0,
              borderBottomColor:
                detailsStatus === "about movie" ? "#3A3F47" : "transparent",
            }}
          >
            About Movie
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStatus("reviews")}>
          <Text
            style={{
              ...styles.detailsListItem,
              borderBottomWidth: detailsStatus === "reviews" ? 4 : 0,
              borderBottomColor:
                detailsStatus === "reviews" ? "#3A3F47" : "transparent",
            }}
          >
            Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStatus("cast")}>
          <Text
            style={{
              ...styles.detailsListItem,
              borderBottomWidth: detailsStatus === "cast" ? 4 : 0,
              borderBottomColor:
                detailsStatus === "cast" ? "#3A3F47" : "transparent",
            }}
          >
            Cast
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "83%",
          marginTop: "5%",
          marginHorizontal: 32,
          justifyContent: "space-between",
        }}
      >
        {detailsStatus === "about movie" ? (
          <AboutMovie description={singleMovie?.overview} />
        ) : detailsStatus === "reviews" ? (
          <Reviews />
        ) : (
          <Cast />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  infoHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInfo: {
    color: "#92929D",
    fontFamily: "MontserratRegular",
    fontSize: 12,
    lineHeight: 15,
    paddingLeft: 8,
    letterSpacing: 0.12,
  },
  detailsListItem: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "#FFF",
    marginRight: 36,
    letterSpacing: 0.6,
    paddingVertical: 5,
  },
});
export default DetailsScreen;
