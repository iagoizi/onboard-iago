import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button/button';
import { Cell } from '../components/cell/cell';
import { ErrorMessage } from '../components/error-message/error-message';
import { FormField } from '../components/form/form-field';
import { H1 } from '../components/h1/h1';
import { LoginData, LOGIN_MUTATION } from '../data/login-mutation';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../utils/regex.ultils';
import { USERS_PATH } from '../utils/routes';

interface LoginScreenState {
  email: string;
  password: string;
}

export const LoginScreen: React.FC = () => {
  const [fields, setFields] = useState({ email: '', password: '' });
  const history = useHistory();
  const handleCompleted = ({ login }: LoginData) => {
    localStorage.setItem('token', login.token);
    history.push(`${USERS_PATH}/0`);
  };

  const [authenticate, { error, loading }] = useMutation<LoginData>(LOGIN_MUTATION, {
    onCompleted: handleCompleted,
    onError: (errorResponse) => {
      console.warn(errorResponse);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prevState: LoginScreenState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate({ variables: { data: fields } });
  };

  return (
    <div>
      <H1>Bem-vindo(a) à Taqtile</H1>
      <ErrorMessage>{error?.message}</ErrorMessage>
      <Cell>
        <form onSubmit={onSubmit}>
          <FormField
            name='email'
            label='E-mail'
            type='email'
            onChange={handleChange}
            title='usuario@dominio.com'
            pattern={EMAIL_REGEX}
            required
          />
          <FormField
            name='password'
            label='Senha'
            type='password'
            onChange={handleChange}
            title='No mínimo 7 caracteres, tendo pelo menos uma letra e um dígito'
            pattern={PASSWORD_REGEX}
            required
          />
          <Cell direction='column'>
            <Button disabled={loading}>Entrar {loading && '(carregando)'}</Button>
          </Cell>
        </form>
      </Cell>
    </div>
  );
};
