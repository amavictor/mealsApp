import { useContext } from 'react'
import styled from 'styled-components/native'
import { FavouritesContext } from '../../../service/favourites/favourites.context'
import { Text } from '../../../components/typography/text.component'
import { SafeArea } from '../../../components/utitlity/safe-area.component'
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles'
import { TouchableOpacity } from 'react-native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component'

const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`
export const FavouritesScreen = ({navigation}) => {
    const { favourites } = useContext(FavouritesContext)

    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantsDetails", {
                            restaurant: item
                        })}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>

                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text>No favourites yet</Text>
        </NoFavouritesArea>
    )
}