
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../features/components/restaurant-info-card.component";
import styled from "styled-components/native";
import { moderateScale } from 'react-native-size-matters';
import { Platform } from "react-native";
import { colors } from './../infrastructure/theme/colors';
import { FlatList } from "react-native";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from './../components/utitlity/safe-area.component';

const SearchContainer = styled.View`
    padding:${props => props.theme.space[3]} ;
`
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding:16,
  }
})`
    padding:${(props)=>props.theme.space[2]} ;
`
//this attrss allows me to access the attributes of the componnent.
const RestaurantListContainer = styled.View`
    flex: 1;
    padding:${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.ui.quaternary}
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },]}
        renderItem={() => <Spacer position={"bottom"} size="large">
          <RestaurantInfoCard />
        </Spacer>}
        keyExtractor={(item) => item.name}
        contentContainerStyle={<RestaurantList/> }//this style works on every content pf the flatList

      />

    </RestaurantListContainer>
  </SafeArea>
);
