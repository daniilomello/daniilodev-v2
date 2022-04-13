import { Box, HStack, Avatar as ChakraAvatar, Heading } from '@chakra-ui/react';

export function Avatar() {
  return (
    <Box>
      <ChakraAvatar
        size="2xl"
        name="Danilo Mello"
        src="https://github.com/daniilomello.png"
      />
      <Heading as="h2" fontSize="24px" mt="12px">
        Danilo Mello
      </Heading>
      <Heading as="h6" fontSize="18px" color="blue.600">
        Desenvolvedor Full Stack
      </Heading>
      <HStack mt="12px">
        <Box
          as="span"
          color="pink.200"
          py="4px"
          px="12px"
          border="1px"
          borderColor="pink.200"
          borderRadius="12px"
          fontSize="12px"
        >
          Typescript
        </Box>

        <Box
          as="span"
          color="pink.200"
          py="4px"
          px="12px"
          border="1px"
          borderColor="pink.200"
          borderRadius="12px"
          fontSize="12px"
        >
          React
        </Box>
        <Box
          as="span"
          color="pink.200"
          py="4px"
          px="12px"
          border="1px"
          borderColor="pink.200"
          borderRadius="12px"
          fontSize="12px"
        >
          Node
        </Box>
        <Box
          as="span"
          color="pink.200"
          py="4px"
          px="12px"
          border="1px"
          borderColor="pink.200"
          borderRadius="12px"
          fontSize="12px"
        >
          WorPress
        </Box>
        <Box
          as="span"
          color="pink.200"
          py="4px"
          px="12px"
          border="1px"
          borderColor="pink.200"
          borderRadius="12px"
          fontSize="12px"
        >
          Figma
        </Box>
      </HStack>
    </Box>
  );
}
