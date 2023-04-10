import camelize from "camelize"

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) reject("location not found")
        resolve(mock)
    })
}

const restaurantTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
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