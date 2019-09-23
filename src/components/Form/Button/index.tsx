import React, {
  forwardRef,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  Ref,
  useCallback,
  MouseEvent,
} from 'react';
import { Container } from './styles';

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

  return <Container {...props} ref={ref} onClick={onClickProxy} />;
};

export default forwardRef<HTMLButtonElement, Props>(Button);
