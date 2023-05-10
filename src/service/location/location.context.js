
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext()
export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("san fransisco")
    const [location, setLocation] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setisLoading(true)
        setKeyword(searchKeyword)
        locationRequest(keyword)
            .then(locationTransform)
            .then(result => {
                setisLoading(false)
                setLocation(result)
            })
            .catch(error => {
                setisLoading(false)
                setError(error)
        })
    }
    useEffect(() => {
        onSearch(keyword)
    }, [])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}