import { useEffect } from "react";

import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
}

export const contextAuth = createContext(INITIAL_STATE)

export const ContextAuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    }, [state.currentUser])

    return (
        <contextAuth.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </contextAuth.Provider>
    )
}

