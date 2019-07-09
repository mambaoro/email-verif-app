import { css } from 'styled-components';

const media = (content, breakpoint) => css`
  @media only screen and (max-width: ${breakpoint}) {
    ${content}
  }
`;

const bp = {
  bp1200: '75em', // Example
};

const cssSharedBox = css`
  padding: 3rem;
  font-size: 1.8rem;
  text-align: center;
  background-color: var(--bg-color-box);
  color: #f8f8ff;
  border: 2px solid #f8f8ff;
  min-width: 50rem;
  max-width: 60rem;
  border-radius: 5px;
  margin-bottom: 4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export { media, bp, cssSharedBox };
