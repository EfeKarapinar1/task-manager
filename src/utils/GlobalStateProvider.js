import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({
        selectedTaskId: 0
    });

    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export { GlobalStateProvider, useGlobalState };