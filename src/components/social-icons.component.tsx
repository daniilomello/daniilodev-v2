import { Link as ChakraLink, HStack, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from 'react-icons/ri';
import { AiOutlineFilePdf } from 'react-icons/ai';

export function SocialIcons() {
  return (
    <HStack mt="24px">
      <Link href="https://www.linkedin.com/in/daniilomello/" passHref={true}>
        <ChakraLink target="_blank">
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

      <Link href="https://github.com/daniilomello" passHref={true}>
        <ChakraLink target="_blank">
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

      <Link href="https://www.instagram.com/daniilomello/" passHref={true}>
        <ChakraLink target="_blank">
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

      <Link href="/resume.pdf" passHref={true}>
        <ChakraLink target="_blank">
          <IconButton
            aria-label="Home Icon"
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={<AiOutlineFilePdf size="28px" />}
            transition="0.5s"
            _hover={{
              color: 'pink.200',
              transform: 'translateY(-5px)',
            }}
          />
        </ChakraLink>
      </Link>

      <Link href="mailto:danilodemellow@gmail.com" passHref={true}>
        <ChakraLink target="_blank">
          <IconButton
            aria-label="Home Icon"
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={<RiMailLine size="28px" />}
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
