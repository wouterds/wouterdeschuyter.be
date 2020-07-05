import React, { createContext, ReactNode, useState } from 'react';

import { User } from './types';

interface Context {
  setUser: (user: User | null) => void;
  user: User | null;
}

export const UserContext = createContext<Context>({
  setUser: () => {},
  user: null,
});

interface UserContextProviderProps {
  children: ReactNode;
  user: User | null;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(props.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
