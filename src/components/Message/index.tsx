import React from 'react';

import { Container } from './styles';

interface MessageProps {
  title: string;
}
const Message: React.FC<MessageProps> = ({ title, children }) => {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Message;
