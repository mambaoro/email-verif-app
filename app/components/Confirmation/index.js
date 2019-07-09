/* eslint-disable no-unused-expressions */
/**
 *
 * Confirmation
 *
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cssSharedBox } from '../../base';

const SectionConfirmation = styled.section`
  ${cssSharedBox}
  background-color: #fafafa;
  color: var(--bg-color-box);
  p:last-of-type {
    margin-top: 1.5rem;
    a {
      color: currentColor;
    }
  }
`;

function Confirmation(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const getConfirmation = async () => {
      const token = props.location.pathname.split('/')[2];
      const res = await axios.get(`/getConfirmation/${token}`);
      res.data.accepted && setIsConfirmed(true);
      !res.data.accepted && setError('An error occurred');
      res.data.username && setUsername(res.data.username);
    };
    getConfirmation();
  });
  return (
    <SectionConfirmation>
      {isConfirmed && username && (
        <p>
          Thank you {username}, your email is now confirmed. If you try to
          register again a message will prompt to let you know that you
          can&apos;t anymore.
        </p>
      )}
      {error && <p>{error}</p>}
      <p>
        Back to <Link to="/">Homepage</Link>
      </p>
    </SectionConfirmation>
  );
}

Confirmation.propTypes = {
  location: PropTypes.object,
};

export default Confirmation;
