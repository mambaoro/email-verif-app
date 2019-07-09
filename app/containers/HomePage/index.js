/*
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import Main from '../../components/Main/Loadable';
import takeoff from '../../videos/Pexels Videos 1451800.mp4';

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

const DivBgPrimary = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(80, 200, 120, 0.8);
`;

const DivVideoWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
`;

function Homepage() {
  return (
    <Container>
      <DivVideoWrapper>
        <video autoPlay loop muted>
          <source src={takeoff} type="video/mp4" />
        </video>
      </DivVideoWrapper>
      <DivBgPrimary />
      <Main />
    </Container>
  );
}

export default Homepage;
