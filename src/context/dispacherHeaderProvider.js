import React from "react"; 
import { AuthProvider } from "./authContext";
import DispatcherHeader from "../Componats/Dispatcher/dispatcherHeader";

export default function DispatcherHeaderProvider(){
    return(<>
    
              <AuthProvider>
                <DispatcherHeader/> 
            </AuthProvider> 
    </>)
}