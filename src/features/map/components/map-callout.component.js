import React from 'react'
import { Text } from 'react-native';
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';

const MyText = styled.Text ``
export const MapCallout = ({restaurant}) => {
  return (
    <CompactRestaurantInfo
      restaurant={restaurant}
    />
  )
}
