/**
 *
 * Main
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionForm from '../Form/Loadable';
import Confirmation from '../Confirmation/Loadable';
import { cssSharedBox } from '../../base';

function Main() {
  return (
    <MainTag>
      <Route path="/confirmation" component={Confirmation} />
      <Route
        exact
        path="/"
        render={() => (
          <ArticlePresentation>
            <h1>Welcome, I&apos;m Mamadou Baoro, web developer</h1>
            <p>
              This small application demonstrate an email verification system.
              It&apos;s been created with NodeJS, Nodemailer, MySQL and React.
              You need to fill the form below to create an username and an
              email, after submitting the form you will be asked to verify your
              email. Check your inbox and click the link received from
              mam.baoro@outlook.fr. <br />
              <br />
              Feel free to use a temporary email for the purpose of this demo.
            </p>
          </ArticlePresentation>
        )}
      />
      <Route exact path="/" render={() => <SectionForm />} />
    </MainTag>
  );
}

const MainTag = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 2.91rem;
    margin-bottom: 2.5rem;
    color: var(--color-h1);
  }
`;

const ArticlePresentation = styled.article`
  ${cssSharedBox}
  p {
    line-height: 1.7;
  }
`;

Main.propTypes = {};

export default Main;
