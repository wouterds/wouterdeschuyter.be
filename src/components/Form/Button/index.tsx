import cx from 'classnames';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  MouseEvent,
  Ref,
  useCallback,
} from 'react';

import styles from './styles.module.scss';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
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
    />
  );
};

export default forwardRef<HTMLButtonElement, Props>(Button);
