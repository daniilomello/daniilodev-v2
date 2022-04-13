import Link from 'next/link';
import {
  Heading,
  HStack,
  Link as ChakraLink,
  Box,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { RiArrowRightUpLine } from 'react-icons/ri';

export function ArticleItem() {
  return (
    <Box p="21px" maxWidth="50%">
      <Image
        src="https://picsum.photos/500/500"
        boxSize="100%"
        height="155px"
        objectFit="cover"
        alt="Blog post image"
        borderRadius="12px"
      />

      <HStack justifyContent="space-between" my="12px">
        <Text as="small" fontSize="12px">
          20 de abril de 2022
        </Text>
        <Text as="small" fontSize="12px">
          4 min
        </Text>
      </HStack>

      <Heading as="h3" mb="24px" fontSize="18px">
        Criando uma landing page com NextJS
      </Heading>

      <Link href="/projects" passHref={true}>
        <ChakraLink>
          <Button
            rightIcon={<RiArrowRightUpLine size="24px" />}
            variant="unstyled"
            fontWeight="normal"
            display="flex"
          >
            Saiba mais
          </Button>
        </ChakraLink>
      </Link>
    </Box>
  );
}
