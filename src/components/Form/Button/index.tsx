import cx from 'classnames';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  MouseEvent,
  ReactNode,
  Ref,
  useCallback,
} from 'react';

import styles from './styles.module.css';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Button = (props: Props, ref: Ref<HTMLButtonElement>) => {
  const { onClick, isLoading = false } = props;

  const onClickProxy = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (isLoading) {
        return;
      }

      if (!onClick) {
        return;
      }

      onClick(e);
    },
    [onClick, isLoading],
  );

  return (
    <button
      {...props}
      ref={ref}
      onClick={onClickProxy}
      className={cx({
        [styles.button]: true,
        [styles.loading]: isLoading,
      })}
    >
      <span className={styles.content}>{props.children}</span>

      <span className={styles.spinner}>
        <svg className="h-8 w-8 opacity-75" viewBox="0 0 24 24">
          <path
            className="text-gray-600"
            fill="currentColor"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
          />
          <path
            className="text-gray-400"
            fill="currentColor"
            d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"
          />
        </svg>
      </span>
    </button>
  );
};

export default forwardRef<HTMLButtonElement, Props>(Button);
