import {mockImages, mocks} from "../mock"
import camelize from "camelize"

export const restaurantRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) reject("location not found")
        resolve(mock)
    })
}

export const restaurantTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    })
   return camelize(mappedResults)
}

restaurantRequest()
    .then(restaurantTransform)
    .then(transformedResponse => {
        console.log(transformedResponse)
    })
    .catch(e => console.log("error"))
    
    //camelize gives you consistency for your apis by camel casing them.