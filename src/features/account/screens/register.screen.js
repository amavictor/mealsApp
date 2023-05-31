import { KeyboardAvoidingView, View } from 'react-native'
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton
} from '../components/acount.styles'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { useContext, useState } from 'react'
import { AuthenticationContext } from '../../../service/authentication/authentication.context'
import { Title } from '../components/acount.styles'


export const RegisterScreen = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("")
  const { onRegister, error } = useContext(AuthenticationContext)


  return (
    <AccountBackground>
      <AccountCover />
      <Title>Locate Meals</Title>
      <KeyboardAvoidingView>
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

          <Spacer size="large">
            <AuthInput
              label="Confirm Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
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
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </KeyboardAvoidingView>

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
