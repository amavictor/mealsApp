import { SafeArea } from '../../../components/utitlity/safe-area.component';
import { AuthenticationContext } from '../../../service/authentication/authentication.context';
import { useContext } from 'react'
import { List, Avatar } from 'react-native-paper';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import styled from 'styled-components/native';


const SettingsItem = styled(List.Item)`\
    padding:${(props) => props.theme.space[3]};
`
const AvatarContainer = styled.View`
    align-items: center;
`

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext)
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon
                    size={100}
                    icon="human"
                    backgroundColor="#2182BD"
                />
                <Spacer
                    size="large"
                    position="top"
                >
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>


            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />

                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="logout" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
}