import { Link as ChakraLink, HStack, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from 'react-icons/ri';

export function SocialIcons() {
  return (
    <HStack mt="24px">
      <Link href="/linkedin" passHref={true}>
        <ChakraLink>
          <IconButton
            aria-label="Home Icon"
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={<RiLinkedinBoxLine size="28px" />}
            transition="0.5s"
            _hover={{
              color: 'pink.200',
              transform: 'translateY(-5px)',
            }}
          />
        </ChakraLink>
      </Link>

      <Link href="/github" passHref={true}>
        <ChakraLink>
          <IconButton
            aria-label="Home Icon"
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={<RiGithubLine size="28px" />}
            transition="0.5s"
            _hover={{
              color: 'pink.200',
              transform: 'translateY(-5px)',
            }}
          />
        </ChakraLink>
      </Link>

      <Link href="/instagram" passHref={true}>
        <ChakraLink>
          <IconButton
            aria-label="Home Icon"
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={<RiInstagramLine size="28px" />}
            transition="0.5s"
            _hover={{
              color: 'pink.200',
              transform: 'translateY(-5px)',
            }}
          />
        </ChakraLink>
      </Link>

      <Link href="/twitter" passHref={true}>
        <ChakraLink>
          <IconButton
            aria-label="Home Icon"
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={<RiTwitterLine size="28px" />}
            transition="0.5s"
            _hover={{
              color: 'pink.200',
              transform: 'translateY(-5px)',
            }}
          />
        </ChakraLink>
      </Link>
    </HStack>
  );
}
