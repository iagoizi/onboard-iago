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
          title='usuario@dominio.com'
          pattern='\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*.([a-zA-Z]{2,}|\d+)' //consultei https://www.formget.com/regular-expression-for-email/
          required
        />
        <Input
          name='password'
          label='Senha'
          type='password'
          onChange={handleChange}
          title='No mínimo 7 caracteres, tendo pelo menos uma letra e um dígito'
          pattern='(?=.*[a-zA-Z])(?=.*\d).{7,}'
          required
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};
