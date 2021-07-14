import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../components/Input';
import { LoginData, LOGIN_MUTATION } from '../data/loginMutation';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../utils/regex.ultils';

interface LoginScreenState {
  email: string;
  password: string;
}

export const LoginScreen: React.FC = () => {
  const [fields, setFields] = useState({ email: '', password: '' });
  const history = useHistory();
  const handleCompleted = ({ login }: LoginData) => {
    localStorage.setItem('token', login.token);
    history.push('blank-page');
  };

  const [authenticate, { error, loading }] = useMutation<LoginData>(LOGIN_MUTATION, {
    onCompleted: handleCompleted,
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
      <h1>Bem-vindo(a) à Taqtile</h1>
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
      <form onSubmit={onSubmit}>
        <Input
          name='email'
          label='E-mail'
          type='email'
          onChange={handleChange}
          title='usuario@dominio.com'
          pattern={EMAIL_REGEX}
          required
        />
        <Input
          name='password'
          label='Senha'
          type='password'
          onChange={handleChange}
          title='No mínimo 7 caracteres, tendo pelo menos uma letra e um dígito'
          pattern={PASSWORD_REGEX}
          required
        />
        <button disabled={loading}>Entrar {loading && '(carregando)'}</button>
      </form>
    </div>
  );
};
