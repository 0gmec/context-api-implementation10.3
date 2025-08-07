import React from 'react';
 

export const FilterContext = React.createContext({
    setFilter: (filter: string)=> {}
})