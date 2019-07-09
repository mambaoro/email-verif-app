/* eslint-disable no-unused-expressions */
/**
 *
 * Form
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import HashLoader from 'react-spinners/HashLoader';
import axios from 'axios';
import { emailFormValidationSchema } from './validationSchema';
import { cssSharedBox } from '../../base';

const cssBoxShadow = css`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  :hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);
  }
`;

const Section = styled.section`
  ${cssSharedBox}
  span {
    display: block;
    color: crimson;
    margin-top: 1rem;
    color: #420d09;
    &:first-of-type {
      margin-top: 2.5rem;
    }
  }
  span.accepted {
    color: #fafafa;
  }
  transition: height 1s ease-in-out;
`;

const DivInputs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-items: center;
  div {
    &:first-of-type {
      margin-bottom: 2rem;
    }
  }
  label {
    margin-bottom: 1rem;
    border-bottom: 1px solid #fafafa;
  }
  input {
    display: inline-block;
    border-radius: 5px;
    padding: 1.225rem;
    min-width: 25rem;
    border: 2px solid var(--color-h1);
    background-color: #fafafa;
    ::placeholder {
      text-align: center;
    }
    ${cssBoxShadow}
  }
`;

const Button = styled.button`
  margin-top: 2.5rem;
  text-align: center;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 6px;
  color: var(--bg-color-box);
  background-color: var(--color-special-1);
  font-size: 1.6rem;
  font-weight: bold;
  ${cssBoxShadow}
  cursor: pointer;
`;

const DivSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem auto;
  margin-bottom: 0;
`;

function Form() {
  const [isVerified, setIsVerified] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [error, setError] = useState('');
  return (
    <Section>
      <h1>Email verification app</h1>
      <Formik
        initialValues={{ username: '', email: '' }}
        validationSchema={emailFormValidationSchema}
        onSubmit={async ({ username, email }, { setSubmitting }) => {
          const res = await axios.post('/createUser', {
            username,
            email,
          });
          setSubmitting(false);
          res.status === 400 && setError('An error occurred');
          res.data.isVerified && setIsVerified(true);
          res.data.accepted && setIsAccepted(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <DivInputs>
              <label htmlFor="username">Username</label>
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="username..."
                />
              </div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="email..."
                />
              </div>
            </DivInputs>
            <ErrorMessage name="username" component="span" />
            <ErrorMessage name="email" component="span" />
            {error && <span>{error}</span>}
            {isVerified && <span>Your email is already verified</span>}
            {isAccepted && (
              <span className="accepted">
                An email has been sent to the provided address, click the link
                received to confirm your email.
              </span>
            )}
            {(!isSubmitting && (
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            )) || (
              <DivSpinner>
                <HashLoader color="#f9e29c" size={40} />
              </DivSpinner>
            )}
          </form>
        )}
      </Formik>
    </Section>
  );
}

Form.propTypes = {};

export default Form;
