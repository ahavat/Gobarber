import { createContext } from 'react';

interface authContext {
  name: string;
}
const authContext = createContext<authContext>({} as AuthContext);

export default authContext;
