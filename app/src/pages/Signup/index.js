/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-horizontal.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import InputRadio from '../../components/InputRadio';

export default function Signup() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiUsers = `${apiURL}/users`;
  const [workerName, setWorkerName] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');
  const [workerRole, setWorkerRole] = useState('');
  const [workerPassword, setWorkerPassword] = useState('');
  // const [workerConfirmPassword, setWorkerConfirmPassword] = useState('');

  const registerUser = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: workerName,
        email: workerEmail,
        role: workerRole,
        restaurant: 'hamburgueria-ipe',
        password: workerPassword,
      }),
    };

    fetch(apiUsers, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <header className='signup-header'>
        <Link to="/">
          <h1><img className='logo-signup' src={logo} alt='Logo Hamburgueria Ipê' /></h1>
        </Link>
        <h2 className='subtitle-base signup-subtitle'>Cadastro</h2>
      </header>

      <form className='form-container' onSubmit={registerUser}>
        <InputText
          divWrapClassName='label-input-wrap'
          labelClassName='label-for-input'
          labelText='Nome'
          inputRequired
          inputType='text'
          inputValue={workerName}
          inputPlaceholder='Digite seu nome'
          inputClassName='input-text'
          inputOnChange={(event) => setWorkerName(event.target.value)}
        />

        <InputText
          divWrapClassName='label-input-wrap'
          labelClassName='label-for-input'
          labelText='E-mail'
          inputRequired
          inputType='email'
          inputValue={workerEmail}
          inputPlaceholder='Digite seu email'
          inputClassName='input-text'
          inputOnChange={(event) => setWorkerEmail(event.target.value)}
        />

        <p className='label-for-input'>Função</p>
        <div className='radio-buttons-wrap'>
          <InputRadio
            inputClassName='input-radio'
            inputId='role-hall'
            inputName='role'
            inputRequired
            inputValue={workerRole === 'hall'}
            inputOnChange={(event) => setWorkerRole(event.target.value)}
            labelHtmlFor='role-hall'
            labelClassName='button-base label-radio'
            labelText='Salão'
          />

          <InputRadio
            inputClassName='input-radio'
            inputId='role-kitchen'
            inputName='role'
            inputRequired
            inputValue={workerRole === 'kitchen'}
            inputOnChange={(event) => setWorkerRole(event.target.value)}
            labelHtmlFor='role-kitchen'
            labelClassName='button-base label-radio'
            labelText='Cozinha'
          />

          {/* <InputText
            divWrapClassName='label-input-wrap'
            labelClassName='button-base label-radio'
            labelText='Salão'
            inputRequired
            inputType='radio'
            inputValue='hall'
            inputChecked={workerRole === 'hall'}
            inputClassName='input-radio'
            inputOnChange={(event) => setWorkerRole(event.target.value)}
          /> */}

          {/* <InputText
            divWrapClassName='label-input-wrap'
            labelClassName='button-base label-radio'
            labelText='Cozinha'
            inputRequired
            inputType='radio'
            inputValue='kitchen'
            inputChecked={workerRole === 'kitchen'}
            inputClassName='input-radio'
            inputOnChange={(event) => setWorkerRole(event.target.value)}
          /> */}
        </div>

        <InputText
          divWrapClassName='label-input-wrap'
          labelClassName='label-for-input'
          labelText='Senha'
          inputRequired
          inputType='password'
          inputPlaceholder='Digite a senha'
          inputClassName='input-text'
          inputOnChange={(event) => setWorkerPassword(event.target.value)}
        />

        {/* <InputText
          divWrapClassName='label-input-wrap'
          labelClassName='signup-label'
          labelText='Confirmar senha'
          inputRequired
          inputType='password'
          inputPlaceholder='Digite a senha novamente'
          inputClassName='signup-input-password'
          inputOnChange={(event) => setWorkerConfirmPassword(event.target.value)}
        /> */}

        <Button
          type='submit'
          className='button-base button-primary'
          buttonText='Cadastrar'
        />
      </form>

      <Link to="/">
        <Button
          type='button'
          className='button-base button-secondary'
          buttonText='Voltar'
        />
      </Link>

      <Footer />
    </Fragment>
  );
}
