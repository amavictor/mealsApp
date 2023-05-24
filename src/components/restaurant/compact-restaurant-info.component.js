import React from 'react'
import  styled  from 'styled-components/native';
import { View } from 'react-native';
import { Text, Image } from '../typography/text.component';

const CompactImage = styled.Image`
    border-radius: 10px;
    width:120px;
    height:120px;
`
const Item = styled(View) 
export const CompactRestaurantInfo = ({restaurant}) => {
    return (
        <Item>
            <CompactImage
                source={{
                    uri:restaurant.photos[0]
                }}
            />
            <Text center variant="caption">{restaurant.name}</Text>
      </Item>
  )
}
