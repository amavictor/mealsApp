import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

export const Navigation = () => {

    const TAB_ICON = {
        Restaurant: "fast-food-sharp",
        Map: "ios-map-outline",
        Settings: "person-circle"
    }

    const createScreenOptions = ({ route }) => {
        const iconName = TAB_ICON[route.name]
        return {
            tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
            headerShown: false,
        }
    }
    const Settings = () => <Text>Settings</Text>

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen
                    name="Restaurant"
                    component={RestaurantNavigator}
                    options={{
                        
                    }}
                />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
