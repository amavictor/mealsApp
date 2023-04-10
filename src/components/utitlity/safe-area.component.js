import styled from "styled-components/native"
import { StatusBar } from "react-native"
export const SafeArea = styled.SafeAreaView`
    flex:1;
    ${Platform.OS === "android" ? `margin-top:${StatusBar.currentHeight}px` : 0};
`