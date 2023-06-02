import { Camera, CameraType } from "expo-camera"
import { useContext, useEffect, useRef } from "react"
import { TouchableOpacity, View } from "react-native"
import styled from "styled-components/native"
import { Text } from "../../../components/typography/text.component"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthenticationContext } from "../../../service/authentication/authentication.context"


const ProfileCamera = styled(Camera)`
    width:100%;
    height:100%;
`
export const CameraScreen = ({navigation}) => {
    const cameraRef = useRef()
    const {user} = useContext(AuthenticationContext)
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
            navigation.goBack()
        }
    }

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
        if (!permission?.granted) {
            <View>
                <Text>Please Allow Permissions in setting </Text>
            </View>
        }

    }, [permission, requestPermission])

    return (
        <TouchableOpacity onPress={snap}>
            <ProfileCamera
                ref={(camera) => (cameraRef.current = camera)}
                type={CameraType.front}
            />
        </TouchableOpacity>
    )
}