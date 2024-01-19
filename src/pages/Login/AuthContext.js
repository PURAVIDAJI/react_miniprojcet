import { createContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [userid,setUserid] =useState("");
    const [email, setEmail] =useState("");
    const [gender,setGender] = useState("");

    const login = (user) =>{
        setAuthenticated(true);
        setUsername(user.username);
        setUserid(user.userid);
        setEmail(user.email);
        setGender(user.gender);
    };

    const logout = () =>{
        setAuthenticated(false);
        setUsername("");
        setUserid("");
        setEmail("");
        setGender("");

    };




    return(
        <AuthContext.Provider value={{isAuthenticated, login,logout, username, userid,email,gender}}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContext;