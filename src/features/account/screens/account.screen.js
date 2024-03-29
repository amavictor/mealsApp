import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    Title,
} from "../components/acount.styles"
import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Locate Meals</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Register
                    </AuthButton>
                </Spacer>

            </AccountContainer>
        </AccountBackground>
    ) 
}