import type { ReactElement } from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

export const Button = (props: ButtonProps): ReactElement => {
  const { disabled, label } = props;

  return (
    <button disabled={disabled} type="button">
      {label}
    </button>
  );
};
