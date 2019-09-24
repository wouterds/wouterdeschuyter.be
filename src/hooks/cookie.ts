import { useState } from 'react';
import Cookie, { Cookies } from 'services/cookie';
import { CookieSetOptions } from 'universal-cookie';
export { Cookies } from 'services/cookie';

export const useCookie = (
  key: Cookies,
  initialValue: string = '',
): [string, (item: string, options?: CookieSetOptions) => void] => {
  const [value, setInnerValue] = useState(
    Cookie.getClient().get(key) || initialValue,
  );

  const setValue = (
    value: string,
    options: CookieSetOptions = { path: '/' },
  ) => {
    setInnerValue(value);
    Cookie.getClient().set(key, value, options);
  };

  return [value, setValue];
};
