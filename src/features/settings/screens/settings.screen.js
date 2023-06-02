import { SafeArea } from '../../../components/utitlity/safe-area.component';
import { AuthenticationContext } from '../../../service/authentication/authentication.context';
import { useCallback, useContext, useEffect, useState } from 'react'
import { List, Avatar } from 'react-native-paper';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const SettingsItem = styled(List.Item)`\
    padding:${(props) => props.theme.space[3]};
`
const AvatarContainer = styled.View`
    align-items: center;
`

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext)
    const [photo, setPhoto] = useState(null)

    const getProfilePicture = async (user) => {
        const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`)
        setPhoto(photoUri)
    }

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user)
        }, [user])
    )//focus effect make this rerender with the screen goes back into focus

    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {
                        photo ?
                            <Avatar.Image
                                size={100}
                                source={{ uri: photo }}
                                backgroundColor="#2182BD"
                            />
                            :
                            <Avatar.Icon
                                size={100}
                                icon="human"
                                backgroundColor="#2182BD"
                            />
                    }

                </TouchableOpacity>
                <Spacer
                    size="large"
                    position="top"
                >
                    <Text variant="label">{user && user?.email}</Text>
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