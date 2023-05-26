import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { useContext } from 'react';
// import { LocationContext } from "../../../service/location/location.context";
import { RestaurantsContext } from '../../../service/restaurants/restaurant.context';
import { useEffect, useState } from 'react';
// import { restaurantRequest } from '../../../service/restaurants/restaurant.service';
import { MapCallout } from "../components/map-callout.component";
import { LocationContext } from "../../../service/location/location.context";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`   

export const MapScreen = ({navigation}) => {

    const { location } = useContext(LocationContext)
    const { restaurants } = useContext(RestaurantsContext)
    const [latDelta, setLatDelta] = useState(0)//This determines how close we are going to zoom on the map

    const { lat, lng, viewport } = location

    console.log(viewport.northeast, "This is the viewport")


    //This is to know where exactly the location marker needs to be
    useEffect(() => {
        const northeastLat = viewport.northeast.lat
        const southwestLat = viewport.southwest.lat
        setLatDelta(northeastLat - southwestLat)
    }, [location])
    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map(restaurant => {
                    return <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    >
                        <Callout onPress={()=>navigation.navigate("RestaurantsDetails", {restaurant})}>
                            <MapCallout restaurant={restaurant} />
                        </Callout>
                    </Marker>
                })}
            </Map>
        </>
    )
}