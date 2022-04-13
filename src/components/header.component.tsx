import {
  Box,
  IconButton,
  Container,
  Link as ChakraLink,
  Tooltip,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiGitRepositoryLine, RiHome2Line, RiPencilLine } from 'react-icons/ri';

export function Header() {
  return (
    <>
      <Box as="header" pb="260px" bgGradient="linear(to-l, #FFAAEB, #C6C7FF)">
        <Container
          as="nav"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt="48px"
          mx="auto"
          maxWidth="768px"
        >
          <HStack spacing={2}>
            <Link href="/" passHref={true}>
              <ChakraLink>
                <Tooltip
                  label="Home"
                  aria-label="A home tooltip"
                  bg="blue.900"
                  color="blue.50"
                  borderRadius="10px"
                  px="18px"
                  py="4px"
                >
                  <IconButton
                    aria-label="Home Icon"
                    variant="unstyled"
                    bg="transparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.900"
                    icon={<RiHome2Line size="22px" />}
                    _hover={{
                      bgColor: 'blackAlpha.100',
                    }}
                  />
                </Tooltip>
              </ChakraLink>
            </Link>

            <Link href="/blog" passHref={true}>
              <ChakraLink>
                <Tooltip
                  label="Blog"
                  aria-label="Blog"
                  bg="blue.900"
                  color="blue.50"
                  borderRadius="10px"
                  px="18px"
                  py="4px"
                >
                  <IconButton
                    aria-label="Blog"
                    variant="unstyled"
                    bg="transparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.900"
                    icon={<RiPencilLine size="22px" />}
                    _hover={{
                      bgColor: 'blackAlpha.100',
                    }}
                  />
                </Tooltip>
              </ChakraLink>
            </Link>

            <Link href="/projects" passHref={true}>
              <ChakraLink>
                <Tooltip
                  label="Projetos"
                  aria-label="Projetos"
                  bg="blue.900"
                  color="blue.50"
                  borderRadius="10px"
                  px="18px"
                  py="4px"
                >
                  <IconButton
                    aria-label="Projetos"
                    variant="unstyled"
                    bg="transparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.900"
                    icon={<RiGitRepositoryLine size="22px" />}
                    _hover={{
                      bgColor: 'blackAlpha.100',
                    }}
                  />
                </Tooltip>
              </ChakraLink>
            </Link>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
