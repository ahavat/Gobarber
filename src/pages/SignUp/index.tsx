/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUP: React.FC = () => {
  function handleSubmit(data: object): void {
    try {
      const schema = Yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().required('Email Obrigatporio').email('Digite um email válido'),
        password: yup.string().required('Senha Obrigatória').min(&, 'No mínimo 6 digitos'),
      })
    } catch (err) {

    }
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="Login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
export default SignUP;
