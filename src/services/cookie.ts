import { NextPageContext } from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import UniversalCookie, {
  CookieGetOptions as _CookieGetOptions,
} from 'universal-cookie';

export enum Cookies {
  JWT = 'jwt',
}

export type CookieGetOptions = _CookieGetOptions;
export interface CookieSetOptions {
  ctx?: NextPageContext;
  maxAge?: number;
  path?: string;
}

class Cookie {
  private client = new UniversalCookie();

  public init(ctx: NextPageContext) {
    parseCookies(ctx);

    this.client = new UniversalCookie(ctx.req?.headers.cookie);

    return this.client;
  }

  public get = (name: string, options?: CookieGetOptions) =>
    this.client.get(name, options);

  public set = (name: string, value: any, options?: CookieSetOptions) => {
    this.client.set(name, value, {
      path: options?.path || '/',
      maxAge: 24 * 60 * 60 * 30, // 30 days
    });

    if (options?.ctx) {
      parseCookies(options?.ctx);
    }

    setCookie(options?.ctx, name, value, {
      path: options?.path || '/',
      maxAge: 24 * 60 * 60 * 30, // 30 days
    });
  };

  public destroy = (name: string, options?: CookieSetOptions) => {
    this.client.remove(name, {
      path: options?.path || '/',
    });

    if (options?.ctx) {
      parseCookies(options?.ctx);
    }

    destroyCookie(options?.ctx, name, {
      path: options?.path || '/',
    });
  };
}

const CookieService = new Cookie();

export default CookieService;
