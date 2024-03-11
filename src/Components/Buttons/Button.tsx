import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant = 'primary' }) => {
  const validVariant = variant === 'secondary' ? 'secondary' : 'primary';

  const buttonStyle = `button ${
    validVariant === 'secondary' ? 'border border-green-800 rounded-xl text-lg font-semibold py-4 px-16 text-green-800' : 'bg-green-800 rounded-xl text-lg font-semibold py-4 px-16 text-white'
  }`;

  return (
    <button className={buttonStyle}>
      {icon && <span className="button-icon mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
