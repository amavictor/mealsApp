import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screens";
import { theme } from './src/infrastructure/theme/index';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { ActivityIndicator } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native";
import { restaurantRequest } from "./src/service/restaurants/restaurant.service";
import { RestaurantsContextProvider } from "./src/service/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/service/restaurants/location/location.context";

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

  const Tab = createBottomTabNavigator()

  const TAB_ICON = {
    Restaurant: "fast-food-sharp",
    Map: "ios-map-outline",
    Settings: "person-circle"
  }

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]
    return {
      tabBarIcon: ({ size, color }) => {
        return (<Ionicons name={iconName} size={size} color={color} />)
      },
      headerShown: false
    }
  }

  restaurantRequest()

  const Settings = () => <Text>Seetings</Text>
  const Map = () => <Text>Map</Text>

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen /> */}
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTiniColor: "gray"
                }}
              >
                <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>

    </>
  );
}