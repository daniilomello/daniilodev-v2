import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function ProjectsPageTitle() {
  return (
    <Box>
      <Link href="/">
        <a>← Voltar</a>
      </Link>

      <Flex direction="column" align="center" mt="24px">
        <Heading>Projetos</Heading>
        <Text color="blue.400">Coisas que eu criei ou participei :)</Text>
      </Flex>
    </Box>
  );
}
