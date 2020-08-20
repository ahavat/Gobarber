import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
}
const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => { }, []);
  return (
    <authContext.Provider value={{ name: 'Daniel' }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
