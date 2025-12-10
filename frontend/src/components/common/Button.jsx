import React from 'react';

const Button = ({
  children,
  variant = 'ocean',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';

  const variants = {
    // πετρόλ βασικό
    ocean:
      'bg-cyan-700 text-white hover:bg-cyan-900 focus:ring-cyan-900',

    // δευτερεύον – ζεστό γκρι
    secondary:
      'bg-stone-200 text-stone-800 hover:bg-stone-300 focus:ring-stone-400',

    // επικίνδυνο – κόκκινο (πιο ματ)
    danger:
      'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-800',

    // επιτυχία – πράσινο (πιο γήινο)
    success:
      'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-800',

    // outline – λευκό/πετρόλ
    outline:
      'border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50 focus:ring-cyan-900'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-7 py-3 text-base'
  };

  const disabledStyles = disabled
    ? 'opacity-55 cursor-not-allowed'
    : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;