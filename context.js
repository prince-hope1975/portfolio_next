import React, { useContext, useState } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
const [active, setActive] = useState(0);
return (
<AppContext.Provider
value={{
    
active,
setActive, 
}} 
> 
{children}
</AppContext.Provider> 
 ); 
};
export const useGlobalContext = () => useContext(AppContext);
