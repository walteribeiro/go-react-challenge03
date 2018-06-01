import React from 'react';
import { Container } from './styles';

const Loading = () => (
  <Container>
    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
    <p>Loading</p>
  </Container>
);

export default Loading;
