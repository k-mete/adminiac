import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  options = [],
  rows = 3,
  ...rest
}) => {
  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={`w-full px-4 py-2 border ${
              error ? 'border-red-500' : 'border-accent/20'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...rest}
          />
        );
      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full px-4 py-2 border ${
              error ? 'border-red-500' : 'border-accent/20'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              id={name}
              name={name}
              type="checkbox"
              checked={value}
              onChange={onChange}
              disabled={disabled}
              className={`h-4 w-4 text-primary focus:ring-primary border-accent/20 rounded ${className}`}
              {...rest}
            />
            <label htmlFor={name} className="ml-2 block text-sm text-accent">
              {label}
            </label>
          </div>
        );
      case 'radio':
        return (
          <div className="space-y-2">
            {options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  id={`${name}-${option.value}`}
                  name={name}
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  disabled={disabled}
                  className={`h-4 w-4 text-primary focus:ring-primary border-accent/20 ${className}`}
                  {...rest}
                />
                <label
                  htmlFor={`${name}-${option.value}`}
                  className="ml-2 block text-sm text-accent"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full px-4 py-2 border ${
              error ? 'border-red-500' : 'border-accent/20'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...rest}
          />
        );
    }
  };

  return (
    <div className={`mb-4 ${type === 'checkbox' ? '' : 'space-y-1'}`}>
      {type !== 'checkbox' && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-accent"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {renderInput()}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'date',
    'textarea',
    'select',
    'checkbox',
    'radio',
    'file',
  ]),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  rows: PropTypes.number,
};

export default FormInput;