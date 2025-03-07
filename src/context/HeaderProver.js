import React from "react";
import Header from "../Componats/Commons/header";
import { AuthProvider } from "./authContext";

export default function HeaderProvider(){
    return(<>
              <AuthProvider>
                <Header/> 
            </AuthProvider> 
    </>)
}