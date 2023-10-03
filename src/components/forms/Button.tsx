import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
};

const Button = ({ children, icon, isLoading, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;
