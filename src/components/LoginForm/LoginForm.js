import React, { useState } from 'react';
import Button from '../Button';
import classNames from 'classnames';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'login':
        setLogin(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  // todo
  const onSubmitForm = event => {
    event.preventDefault();
    console.log(login);
    console.log(password);
  };

  // todo
  const clearForm = () => {
    setLogin('');
    setPassword('');
  };

  return (
    <div className={classNames(styles.FormWrapper)}>
      <form onSubmit={onSubmitForm} className={styles.Form} id="form">
        <div className={styles.Wrapper}>
          <input
            className={styles.Input}
            type="login"
            name="login"
            value={login}
            onChange={onChangeInput}
            autoComplete="off"
            placeholder=" "
            id={login}
          ></input>

          <label className={styles.Label} for={login}>
            Логин *
          </label>
        </div>
        <div className={classNames(styles.Wrapper, styles.TheLastOne)}>
          <input
            className={styles.Input}
            type="password"
            name="password"
            value={password}
            onChange={onChangeInput}
            autoComplete="off"
            placeholder=" "
            id={password}
          ></input>
          <label className={styles.Label} id={password}>
            Пароль *
          </label>
        </div>
      </form>

      <div className={classNames(styles.BtnWrapper)}>
        <Button type="submit" active={true} form="form">
          Вход
        </Button>

        <Button type="button" active={false}>
          Регистрация
        </Button>
      </div>
    </div>
  );
}
