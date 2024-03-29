import { Spacer } from "../../../components/spacer/spacer.component"
import { AuthenticationContext } from "../../../service/authentication/authentication.context"
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthInput,
    AuthButton,
    Title,
    ErrorContainer
} from "../components/acount.styles"
import { ActivityIndicator, Colors } from "react-native"
import { colors } from "../../../infrastructure/theme/colors"
import { useState, useContext } from "react"
import { Text } from "../../../components/typography/text.component"

export const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { onLogin, isLoading, error } = useContext(AuthenticationContext)


    return (
        <AccountBackground>
            <AccountCover />
            <Title>Locate Meals</Title>
            <AccountContainer>
                <AuthInput
                    label="Email"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />

                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">
                            {error}
                        </Text>
                    </ErrorContainer>
                )}
                <Spacer size="large">
                    {
                        isLoading ?
                            <ActivityIndicator animating={true} color={colors.primary} />
                            :
                            <AuthButton
                                icon="lock-open-outline"
                                mode="contained"
                                onPress={() => onLogin(email, password)}
                            >
                                Login
                            </AuthButton>
                    }

                </Spacer>
            </AccountContainer>
            <Spacer size={"large"}>
                <AuthButton
                    mode="contained"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    )
}