import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ type, active, form, children }) {
  return (
    <button
      type={type}
      form={form}
      className={classNames(
        styles.Btn,
        active && styles.Active,
        !active && styles.NotActive,
      )}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  active: 'true',
  form: null,
  children: 'Button',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  form: PropTypes.string,
  children: PropTypes.string.isRequired,
};

// Примечание:
// Необходимо пробросить 3 пропса:
// 1-й type="button"
// 2-й active={true} или active={false}
// children - текст на кнопке
