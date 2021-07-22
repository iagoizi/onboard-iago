import React, { useState } from 'react';
import { Button } from '../components/button/button';
import { Cell } from '../components/cell/cell';
import { ErrorMessage } from '../components/error-message/error-message';
import { FormField } from '../components/form/form-field';
import { H1 } from '../components/h1/h1';
import { ADD_USER_MUTATION, UserInputType } from '../data/create-user-mutation';
import { UserData } from '../data/login-mutation';
import { useAuthMutation } from '../hooks/use-auth-mutation';
import { EMAIL_REGEX, PASSWORD_REGEX, TELEFONE_REGEX } from '../utils/regex.ultils';

//Ideia: criar um componente genérico de form
export const AddUser: React.FC = () => {
  const [fields, setFields] = useState<UserInputType>({});
  const [createUser, { error, loading }] = useAuthMutation<UserData>(ADD_USER_MUTATION);

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
    createUser({ variables: { data: fields } });
  };

  return (
    <div>
      <H1>Criar usuário</H1>
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
          <FormField name='name' label='Nome' type='text' onChange={handleChange} required />
          <FormField name='birthDate' label='Data de nascimento' type='date' onChange={handleChange} required />
          <FormField name='role' label='Role' type='text' onChange={handleChange} required />
          <FormField
            name='phone'
            label='Telefone'
            type='tel'
            onChange={handleChange}
            pattern={TELEFONE_REGEX}
            title='No mínimo 8 digitos'
            required
          />
          <Button disabled={loading}>Concluir {loading && '(carregando)'}</Button>
        </form>
      </Cell>
    </div>
  );
};
