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
      <Box
        as="header"
        pb={['90px', '100px']}
        bgGradient="linear(to-l, #FFAAEB, #C6C7FF)"
      >
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
                  bg="blue.50"
                  color="blue.900"
                  borderRadius="10px"
                  px="18px"
                  py="4px"
                  fontWeight="bold"
                >
                  <IconButton
                    aria-label="Home Icon"
                    variant="unstyled"
                    bg="transparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.900"
                    icon={<RiHome2Line size="28px" />}
                    _hover={{
                      bgColor: 'blackAlpha.100',
                    }}
                  />
                </Tooltip>
              </ChakraLink>
            </Link>

            <Link
							href="https://danilomello.substack.com/"
							passHref={true}>
              <ChakraLink
								as="a"
								rel="nofollow"
								target="_blank"
								>
                <Tooltip
                  label="Blog"
                  aria-label="Blog"
                  bg="blue.50"
                  color="blue.900"
                  borderRadius="10px"
                  px="18px"
                  py="4px"
                  fontWeight="bold"
                >
                  <IconButton
                    aria-label="Blog"
                    variant="unstyled"
                    bg="transparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.900"
                    icon={<RiPencilLine size="28px" />}
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
                  bg="blue.50"
                  color="blue.900"
                  borderRadius="10px"
                  px="18px"
                  py="4px"
                  fontWeight="bold"
                >
                  <IconButton
                    aria-label="Projetos"
                    variant="unstyled"
                    bg="transparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="blue.900"
                    icon={<RiGitRepositoryLine size="28px" />}
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
