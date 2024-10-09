import React, {useState, useEffect, useContext} from "react";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null); // o un valor inicial según tu caso
    const [isLogged, setIsLogged] = useState(false);
  
    const value = {
      authUser,
      isLogged,
      setAuthUser,
      setIsLogged,
    }
  
    return (
      <AuthContext.Provider value={value}>
        {props.children}
      </AuthContext.Provider>
    )
}
  