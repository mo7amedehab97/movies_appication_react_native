import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Touchable,
} from "react-native";
import React from "react";
import Clock from "../assets/images/Clock.svg";
import Ticket from "../assets/images/Ticket.svg";
import RateIcon from "../assets/images/Vector.svg";
import Calender from "../assets/images/CalendarBlank.svg";
import { imageBaseUrl } from "../assets/Config";

const MovieItem = ({ MovieInfo, category }) => {
  const IDS = MovieInfo?.genre_ids[0];
  const catName = category?.genres.filter(({ id }) => id === IDS);
  const name = { ...catName };

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        marginBottom: 24,
      }}
    >
      <View>
        <Image
          source={{
            uri: `${imageBaseUrl}${
              MovieInfo?.poster_path || MovieInfo?.backdrop_path
            }`,
          }}
          style={{
            borderRadius: 16,
            width: 95,
            height: 120,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            paddingLeft: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsRegular",
              fontSize: 16,
              lineHeight: 24,
              color: "#fff",
            }}
          >
            {MovieInfo?.title || MovieInfo?.original_title}
          </Text>
        </View>
        <View>
          <View style={styles.detailsHolder}>
            <RateIcon />
            <Text
              style={{
                color: "#FF8700",
                fontFamily: "MontserratSemiBold",
                fontSize: 12,
                lineHeight: 15,
                letterSpacing: 0.12,
                paddingLeft: 4,
                paddingTop: 3,
              }}
            >
              {MovieInfo?.vote_average}
            </Text>
          </View>
          <View style={styles.detailsHolder}>
            <Ticket />
            <Text style={styles.detailsText}>
              {name?.[0]?.name === undefined ? "UnRegistered" : name?.[0]?.name}
            </Text>
          </View>
          <View style={styles.detailsHolder}>
            <Calender />
            <Text style={styles.detailsText}>
              {MovieInfo?.release_date?.split("-")[0]}
            </Text>
          </View>
          <View style={styles.detailsHolder}>
            <Clock />
            <Text style={styles.detailsText}>193 minutes</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  detailsHolder: {
    flexDirection: "row",
    paddingLeft: 12,
    alignItems: "center",
  },
  detailsText: {
    fontFamily: "PoppinsLight",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.12,
    paddingLeft: 4,
    color: "#EEE",
    marginTop: 4.5,
  },
});
export default MovieItem;
