import React, {createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContent = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContent.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContent.Provider>
);

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContent);
