import React from 'react'


const AuthContext = React.createContext()

function AuthProvider({children}){
    const [user, setUser] = React.useState(null)

    const login = (username) =>{
        setUser({username})
    }

    const logout = () =>{
        setUser(null)
    }

    const auth = {user, login, logout}


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