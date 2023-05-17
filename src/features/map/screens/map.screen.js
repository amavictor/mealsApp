import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { useContext } from 'react';
import { LocationContext } from '../../../service/restaurants/location/location.context';
import { RestaurantsContext } from '../../../service/restaurants/restaurant.context';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

export const MapScreen = () => {

    const { location } = useContext(LocationContext)
    const {restaurants} = useContext(RestaurantsContext)

    return (
        <>
            <Search />
            <Map>
                {restaurants.map(restaurant => {
                    return null
                })}
            </Map>
        </>

    )
}