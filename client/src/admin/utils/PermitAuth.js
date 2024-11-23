import React, {useState, useContext} from "react";

const PermitContext = React.createContext()

export function PermitAuth() {
    return useContext(PermitContext)
}

export function AuthProvider(props) {
    const [token, setToken] = useState(null); 

  
    const value = {
        token,
        setToken
    }
  
    return (
      <PermitContext.Provider value={value}>
        {props.children}
      </PermitContext.Provider>
    )
}
