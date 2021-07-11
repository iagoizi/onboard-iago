import React, { useState } from 'react';
import { Input } from '../components/Input';

export const LoginScreen: React.FC = () => {
  const [fields, setFields] = useState({ username: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Bem-vindo(a) à Taqtile</h1>
      <form onSubmit={onSubmit}>
        <Input name='username' placeHolder='insira seu username aqui' type='text' onChange={handleChange} />
        <Input name='password' placeHolder='insira seu password aqui' type='password' onChange={handleChange} />
        <button>Entrar</button>
      </form>
    </div>
  );
};
