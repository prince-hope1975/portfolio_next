import React, { useContext, useState } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
const [active, setActive] = useState(0);
const [ref, setRef] = useState(null);
return (
<AppContext.Provider
value={{
    
active,
setActive, 
ref, setRef
}} 
> 
{children}
</AppContext.Provider> 
 ); 
};
export const useGlobalContext = () => useContext(AppContext);
