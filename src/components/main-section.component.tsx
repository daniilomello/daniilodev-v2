import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MainSectionProps {
  children: ReactNode;
}

export function MainSection({ children }: MainSectionProps) {
  return (
    <Container
      as="main"
      bg="blue.900"
      border="1px"
      borderColor="blue.800"
      mx="auto"
      maxWidth={['95%', '768px']}
      p={['14px', '42px']}
      borderRadius="24px"
      position="relative"
      top={['-50px', '-80px']}
    >
      {children}
    </Container>
  );
}
