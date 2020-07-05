import { useContext } from 'react';

import { UserContext } from './context';
import { User } from './types';

export const useUser = (): [User | null, (user: User | null) => void] => {
  const { user, setUser } = useContext(UserContext);

  return [user, setUser];
};
