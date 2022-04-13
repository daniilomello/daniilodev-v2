import Link from 'next/link';
import {
  Heading,
  HStack,
  Link as ChakraLink,
  VStack,
  Box,
  Tooltip,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { RiShareBoxLine } from 'react-icons/ri';

export function ProjectItem() {
  return (
    <Box
      p="24px"
      border="1px"
      borderColor="blue.800"
      borderRadius="12px"
      maxWidth="50%"
    >
      <HStack justifyContent="space-between" mb="24px">
        <Heading as="h3" fontSize="18px">
          Ignews
        </Heading>

        <VStack>
          <Link href="/" passHref={true}>
            <ChakraLink>
              <Tooltip
                label="Acessar projeto"
                aria-label="Acessar projeto tooltip"
                bg="blue.900"
                color="blue.50"
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
                  color="blue.50"
                  icon={<RiShareBoxLine size="28px" />}
                  _hover={{
                    bgColor: 'blackAlpha.100',
                  }}
                />
              </Tooltip>
            </ChakraLink>
          </Link>
        </VStack>
      </HStack>
      <Text mb="24px" fontSize="18px">
        Web app para exibir notícias apenas para assinantes mensais.
      </Text>
      <Text as="small" fontSize="12px">
        React - Stripe - Prismic - FaunaDB
      </Text>
    </Box>
  );
}
