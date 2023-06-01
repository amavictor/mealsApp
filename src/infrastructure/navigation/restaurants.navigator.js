import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-details.screen';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screens';


const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalTransition,
                animationEnabled: true,
                headerShown: false,
                title:null
            }}
        >
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            />
             <RestaurantStack.Screen
                name="RestaurantsDetails"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
} 