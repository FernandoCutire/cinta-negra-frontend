
import React from 'react';

import './signupFormStyles.css';

import { Formik } from 'formik';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '', lastName: '', email: '', password: '' }}
      validate={(values) => {
        let errors = [];
        if (!values.email) {
          errors.email = 'Requerido';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'email invalido';
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
      }}
    >
      {
        ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form onSubmit={handleSubmit} className='form-inline my-2 my-lg-0 signupForm'>
              <input
                className='form-control mr-sm-2'
                placeholder='Nombre de usario'
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <input
                className='form-control mr-sm-2'
                placeholder='Apellidos'
                type='text'
                name='lastName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <input
                className='form-control mr-sm-2'
                placeholder='correo electronico'
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                className='form-control mr-sm-2'
                placeholder='contraseña'
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <button type='submit' disabled={isSubmitting} className='btn btn-outline-success my-2 my-sm-0'>
                registrar
              </button>
            </form>
          )
      }
    </Formik>
  );
};

export default SignupForm;


