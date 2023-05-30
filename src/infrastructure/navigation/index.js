import { useContext } from "react"
import { AppNavigator } from "./app.navigator"
import { AuthenticationContext } from "../../service/authentication/authentication.context"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";


export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator />
                :
                <AccountNavigator/>
            }
        </NavigationContainer>

    )

}