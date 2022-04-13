import { Box, Link as ChakraLink, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function AboutSection() {
  return (
    <Box as="section" mt="48px">
      <Heading as="h3" fontSize="24px" mb="24px">
        Olá Jovem! 👋
      </Heading>
      <Text fontSize="18px">
        Desenvolvedor Front-end focado em React, com pouco conhecimento em
        Back-end com Node. Atualmente trabalhando na &nbsp;
        <Link
          href="https://agenciar8.com.br/?origin=daniilo.dev"
          passHref={true}
        >
          <ChakraLink
            as="a"
            rel="nofollow"
            target="_blank"
            color="pink.200"
            fontWeight="bold"
          >
            @agenciaR8
          </ChakraLink>
        </Link>
        , e desenvolvendo sistema para &nbsp;
        <Link
          href="https://gabaritalab.com.br/?origin=daniilo.dev"
          passHref={true}
        >
          <ChakraLink
            as="a"
            rel="nofollow"
            target="_blank"
            color="pink.200"
            fontWeight="bold"
          >
            @gabaritalab
          </ChakraLink>
        </Link>
        .
      </Text>
      <Text fontSize="18px" mt="24px">
        Estudando Node e Typescript na &nbsp;
        <Link
          href="https://rocketseat.com.br/?origin=daniilo.dev"
          passHref={true}
        >
          <ChakraLink
            as="a"
            rel="nofollow"
            target="_blank"
            color="pink.200"
            fontWeight="bold"
          >
            @rocketseat
          </ChakraLink>
        </Link>
        .
      </Text>
    </Box>
  );
}
