import { createContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [userid,setUserid] =useState("");

    const login = (user) =>{
        setAuthenticated(true);
        setUsername(user.username);
        setUserid(user.userid)
    };

    const logout = () =>{
        setAuthenticated(false);
        setUsername("");
        setUserid("");

    };




    return(
        <AuthContext.Provider value={{isAuthenticated, login,logout, username, userid}}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContext;