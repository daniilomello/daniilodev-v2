import type { NextPage } from 'next';
import {
  Box,
  IconButton,
  Container,
  Link as ChakraLink,
  Tooltip,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Header } from '../components/header.component';
import { Avatar } from '../components/avatar.component';
import { AvaliableTooltip } from '../components/avaliable-tooltip.component';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container
        as="main"
        bg="blue.900"
        border="1px"
        borderColor="blue.700"
        mx="auto"
        maxWidth="768px"
        minHeight="600px"
        p="42px"
        borderRadius="24px"
        position="relative"
        top="-140px"
      >
        <Box
          as="section"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Avatar />
          <AvaliableTooltip />
        </Box>

        <Box as="section" mt="48px">
          <Heading as="h3" fontSize="24px" mb="24px">
            Olá Jovem! 👋
          </Heading>
          <Text fontSize="18px">
            Desenvolvedor Front-end focado em React, com pouco conhecimento em
            Back-end com Node. Atualmente trabalhando na{' '}
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
            , e desenvolvendo sistema para{' '}
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
            Estudando Node e Typescript na{' '}
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
            </Link>{' '}
            .
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Home;
