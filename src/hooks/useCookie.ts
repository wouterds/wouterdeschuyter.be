import { useState } from 'react';
import Cookie, { Cookies, CookieSetOptions } from 'services/cookie';
export { Cookies } from 'services/cookie';

export const useCookie = (
  key: Cookies,
  initialValue = '',
): [string, (item: string, options?: CookieSetOptions) => void] => {
  const [value, setInnerValue] = useState(Cookie.get(key) || initialValue);

  const setValue = (value: string, options: CookieSetOptions = {}) => {
    setInnerValue(value);
    Cookie.set(key, value, { path: '/', ...options });
  };

  return [value, setValue];
};
