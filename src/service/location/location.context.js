
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

    const onSearch = (searchKeyword = "Antwerp") => {
        console.log(searchKeyword)
        setisLoading(true)
        setKeyword(searchKeyword)
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setisLoading(false)
                setLocation(result)
                console.log(result)
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