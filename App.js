import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailsScreen,
  HomeScreen,
  WatchListScreen,
  SearchScreen,
  SplashScreen,
} from "./screens";
import { ContextProvider } from "./Context/Context";

import { useFonts } from "expo-font";
import { primaryColor } from "./assets/Colors";
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    MontserratSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ContextProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="WatchList" component={WatchListScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
