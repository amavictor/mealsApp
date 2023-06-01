import { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { Text, Button } from 'react-native';
import { SafeArea } from '../../components/utitlity/safe-area.component';
import { AuthenticationContext } from '../../service/authentication/authentication.context';
import { FavouritesContextProvider } from '../../service/favourites/favourites.context';
import { LocationContextProvider } from '../../service/location/location.context';
import { RestaurantsContextProvider } from '../../service/restaurants/restaurant.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button
        title="Logout"
        onPress={onLogout}
      />
    </SafeArea>
  )
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};


export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>

        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Restaurants"
            component={RestaurantNavigator}
            options={{
              headerShown: false
            }}

          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false
            }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>

);
