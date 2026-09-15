import React, { useContext } from "react";
import { createContext, useState } from "react";


// 1. Tipado del obejto principal de contexto 

type User = {
    email: string;
    authToken?: string;
    sessionToken?: string;
    role?: string;    

} | null

type AuthContextType = {
    user: User | null;
    login: (email: string) => boolean;
    logout: ()=>{};
    
}


//2. creacion del contexto 
const AuthContext = createContext<AuthContextType | null>(null);



// 3. creacion del provider del contexto: medio por el cual manejamos el estado 


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    // declaracion de las 3 propiedad del contexto 

    const [user, setUser] = useState<User>(null);
    const login = (email: string): boolean => {
       const isAllowed = email.endsWith('.edu');
       if (isAllowed) {
        setUser({email});

        }

        return isAllowed;
    }

    const logout = () => {
        return '';
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// 4. hook personalzado: exposicion del contexto a componentes de la aplicacion

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe ser usado dentro de  AuthProvider');
    return context;
}   