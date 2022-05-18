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

interface ArticleItemProps {
  date: string;
  readTime: number;
  title: string;
  cta: string;
  postLink: string;
}

export function ArticleItem({
  date,
  title,
  readTime,
  cta,
  postLink,
}: ArticleItemProps) {
  return (
    <Box p={['4px', '21px']}>
      <HStack justifyContent="space-between" my="12px">
        <Text as="small" fontSize="12px">
          {date}
        </Text>
        <Text as="small" fontSize="12px">
          {readTime} min
        </Text>
      </HStack>

      <Heading as="h3" mb="24px" fontSize="18px">
        <Link href={postLink} passHref={true}>
          {title}
        </Link>
      </Heading>

      <Link href={postLink} passHref={true}>
        <ChakraLink>
          <Button
            rightIcon={<RiArrowRightUpLine size="24px" />}
            variant="unstyled"
            fontWeight="normal"
            display="flex"
          >
            {cta}
          </Button>
        </ChakraLink>
      </Link>
    </Box>
  );
}
