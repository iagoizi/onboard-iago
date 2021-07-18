import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ErrorMessage } from '../components/error-message';
import { Input } from '../components/input';
import { ADD_USER_MUTATION, UserInputType } from '../data/create-user-mutation';
import { UserData } from '../data/login-mutation';
import { EMAIL_REGEX, PASSWORD_REGEX, TELEFONE_REGEX } from '../utils/regex.ultils';

//Ideia: criar um componente genérico de form
export const AddUser: React.FC = () => {
  const [fields, setFields] = useState<UserInputType>({});
  const token = localStorage.getItem('token');
  const handleComplete = (data: UserData) => {
    console.log(data);
  };
  const [createUser, { error, loading }] = useMutation<UserData>(ADD_USER_MUTATION, {
    onCompleted: handleComplete,
    onError: (errorResponse) => {
      console.warn(errorResponse);
    },
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prevState: UserInputType) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(token);
    createUser({ variables: { data: fields } });
  };

  return (
    <div>
      <h1>Cadastro de novo usuário</h1>
      <ErrorMessage>{error?.message}</ErrorMessage>
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
        <Input name='name' label='Nome' type='text' onChange={handleChange} required />
        <Input
          name='birthDate'
          label='Data de nascimento'
          type='date'
          onChange={handleChange}
          title='Data não pode ser futura'
          required
        />
        <Input name='role' label='Role' type='text' onChange={handleChange} required />
        <Input
          name='phone'
          label='Telefone'
          type='tel'
          onChange={handleChange}
          pattern={TELEFONE_REGEX}
          title='No mínimo 8 digitos'
          required
        />
        <button disabled={loading}>Registrar {loading && '(carregando)'}</button>
      </form>
    </div>
  );
};
