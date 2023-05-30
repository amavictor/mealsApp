import { useState } from "react"
import { loginRequest } from "./authentication.service"
import { createContext } from "react"




export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }).catch((e) => {
            setIsLoading(false)
            setError(e8)
        })
    }

    return (
        <AuthenticationContext.Provider value={{
            user,
            isLoading,
            error,
            onLogin
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}