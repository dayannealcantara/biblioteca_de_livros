import React from 'react';

import { Container } from './styles'

const Home: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Home
