import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utitlity/safe-area.component"
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../service/restaurants/restaurant.context";
import { FavouritesContext } from "../../../service/favourites/favourites.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from '../../../components/animations/fade.animation';




const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.red800} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}

      />
      {isToggled &&
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      }
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantsDetails", {
              restaurant: item
            })}>
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>

          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};