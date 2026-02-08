import React, { createContext, useContext } from 'react';

const NavContext = createContext({
    navigate: () => { }
});

export const useNav = () => useContext(NavContext);

export default NavContext;
