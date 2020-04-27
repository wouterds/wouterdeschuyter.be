import {
  IframeHTMLAttributes as _IframeHTMLAttributes,
  ImgHTMLAttributes as _ImgHTMLAttributes,
} from 'react';

declare module 'react' {
  interface ImgHTMLAttributes<T> extends _ImgHTMLAttributes<T> {
    loading?: 'lazy';
  }

  interface IframeHTMLAttributes<T> extends _IframeHTMLAttributes<T> {
    loading?: 'lazy';
  }
}
