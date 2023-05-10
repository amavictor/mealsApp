import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors} from "react-native-paper";

import {SafeArea} from "../components/utitlity/safe-area.component"
import { RestaurantInfoCard } from "../features/components/restaurant-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";

import { RestaurantsContext } from "../service/restaurants/restaurant.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;



const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};