import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function BlogPageTitle() {
  return (
    <Box>
      <Link href="/">
        <a>← Voltar</a>
      </Link>

      <Flex direction="column" align="center" mt="24px">
        <Heading>Blog</Heading>
        <Text color="blue.400">As vezes eu escrevo algumas coisas :)</Text>
      </Flex>
    </Box>
  );
}
