import { useEffect, useState } from "react"
import { loginRequest } from "./authentication.service"
import { createContext } from "react"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "./authentication.service"




export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (u) => {
            if (u) {
                setUser(u)
                setIsLoading(false)
            }

        })
        return unSubscribe
    }, [])

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password)?.then((u) => {
            setUser(u)
            setIsLoading(false)
        }).catch((e) => {
            setIsLoading(false)
            setError(e.toString())
        })
    }

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true)
        if (password !== repeatedPassword) {
            setError("Passwords don't match")
            return
        }
        createUserWithEmailAndPassword(auth, email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }).catch((e) => {
            setIsLoading(false)
            setError(e.toString())
        })
    }

    const onLogout = () => {
        setUser(null)
        signOut(auth)
    }

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}