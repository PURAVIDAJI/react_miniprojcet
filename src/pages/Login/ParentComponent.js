import React,{useState} from "react";
import Login from "./LoginForm";
import { AuthProvider } from "./AuthContext";

function ParentComponent(){


    return(
        <AuthProvider>
        <div>
            <Login/>

        </div>
        </AuthProvider>
    );
}

export default ParentComponent;