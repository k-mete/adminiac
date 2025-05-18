import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = '',
  shadow = 'md',
  padding = 'normal',
  border = false,
  ...rest
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    normal: 'p-5',
    large: 'p-6',
  };

  const borderClass = border ? 'border border-accent/20' : '';

  return (
    <div
      className={`bg-background rounded-lg ${shadowClasses[shadow]} ${borderClass} ${className}`}
      {...rest}
    >
      {(title || subtitle) && (
        <div className={`border-b border-accent/20 ${paddingClasses[padding]}`}>
          {title && (
            <h3 className="text-lg font-medium leading-6 text-text">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-accent">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={paddingClasses[padding]}>
        {children}
      </div>

      {footer && (
        <div className={`border-t border-accent/20 ${paddingClasses[padding]}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  padding: PropTypes.oneOf(['none', 'small', 'normal', 'large']),
  border: PropTypes.bool,
};

export default Card;
