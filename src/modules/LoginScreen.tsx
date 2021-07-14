import React, { useState } from 'react';
import { Input } from '../components/Input';

interface LoginScreenState {
  email: string;
  password: string;
}

export const LoginScreen: React.FC = () => {
  const [fields, setFields] = useState({ email: '', password: '' });

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
    console.log(fields);
  };

  return (
    <div>
      <h1>Bem-vindo(a) à Taqtile</h1>
      <form onSubmit={onSubmit}>
        <Input
          name='email'
          label='E-mail'
          type='email'
          onChange={handleChange}
          title='a'
          pattern='\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*.([a-z]{2,4}|\d+)'
          required
        />
        <Input name='password' label='Senha' type='password' onChange={handleChange} required />
        <button>Entrar</button>
      </form>
    </div>
  );
};
