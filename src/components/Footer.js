import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className="text-center py-3">
        &copy; {new Date().getFullYear()} Your Store Name. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
