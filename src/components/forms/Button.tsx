import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
};

const Button = ({ children, icon, isLoading, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {/* { isLoading && (
        <FontAwesomeIcon icon={faCircleNotch} spin size="xs" style={{marginRight: '10'}}/>
      )} */}
      {children}
    </button>
  );
}

export default Button;
