import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme/index';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { ActivityIndicator } from "react-native-paper";
import { restaurantRequest } from "./src/service/restaurants/restaurant.service";
import { AuthenticationContextProvider } from './src/service/authentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation';



export default function App() {


  const [oswaldLoaded] = useFonts({
    Oswald_400Regular
  })
  const [latoLoaded] = useFonts({
    Lato_400Regular
  })
  if (!oswaldLoaded || !latoLoaded) {
    return <ActivityIndicator />
  }

  //This is a restaurant request
  restaurantRequest()

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen /> */}
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>

    </>
  );
}