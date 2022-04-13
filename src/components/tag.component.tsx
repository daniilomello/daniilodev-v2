import { Box } from '@chakra-ui/react';

interface TagItemProps {
  name: string;
}

export function TagItem({ name }: TagItemProps) {
  return (
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
      {name}
    </Box>
  );
}
