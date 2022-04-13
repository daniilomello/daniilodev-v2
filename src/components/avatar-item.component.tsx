import { Box, HStack, Avatar as ChakraAvatar, Heading } from '@chakra-ui/react';
import { TagItem } from './tag.component';

export function AvatarItem() {
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
        <TagItem name="Typescript" />
        <TagItem name="React" />
        <TagItem name="Node" />
        <TagItem name="WordPress" />
        <TagItem name="Figma" />
      </HStack>
    </Box>
  );
}
