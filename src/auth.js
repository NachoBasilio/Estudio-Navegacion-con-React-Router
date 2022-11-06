import React from 'react'


const AuthContext = React.createContext()

function AuthProvider({children}){

    const auth = {}

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const auth = React.useContext(AuthContext)
    return auth
}

export{
    AuthProvider,
    useAuth
}