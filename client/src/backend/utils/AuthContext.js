import React, {useState, useContext} from "react";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null); 
    const [authUserName, setAuthUserName] = useState(null); 
    const [isLogged, setIsLogged] = useState(false);

  
    const value = {
      authUserName,
      authUser,
      isLogged,
      setAuthUserName,
      setAuthUser,
      setIsLogged,
    }
  
    return (
      <AuthContext.Provider value={value}>
        {props.children}
      </AuthContext.Provider>
    )
}
  