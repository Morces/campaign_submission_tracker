import React, { createContext } from "react";

// Define the types for the context
interface User {
  id: string;
  name: string;
  email: string;
}

interface AppContextValue {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// Create the context with an initial value of `undefined`
const AppContext = createContext<AppContextValue | undefined>(undefined);

export default AppContext;
