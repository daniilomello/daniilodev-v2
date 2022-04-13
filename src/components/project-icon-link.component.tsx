import Link from 'next/link';
import { Link as ChakraLink, Tooltip, IconButton } from '@chakra-ui/react';
import { RiShareBoxLine, RiGithubLine } from 'react-icons/ri';
import { FaFigma } from 'react-icons/fa';
import { SiLoom } from 'react-icons/si';

interface ProjectIconLinkProps {
  labelName: string;
  iconLink?: string;
  asGithub?: boolean;
  asFigma?: boolean;
  asLive?: boolean;
  asLoom?: boolean;
}

// <RiShareBoxLine size="28px" />

export function ProjectIconLink({
  labelName,
  iconLink,
  asLive = false,
  asGithub = false,
  asFigma = false,
  asLoom = false,
}: ProjectIconLinkProps) {
  const renderIcon = () => {
    if (asLive) {
      return <RiShareBoxLine size="28px" />;
    }

    if (asGithub) {
      return <RiGithubLine size="28px" />;
    }

    if (asFigma) {
      return <FaFigma size="28px" />;
    }

    if (asLoom) {
      return <SiLoom size="28px" />;
    }

    return <RiShareBoxLine size="28px" />;
  };

  return (
    <Link href={iconLink ?? '/'} passHref={true}>
      <ChakraLink>
        <Tooltip
          label={labelName}
          aria-label={labelName}
          bg="blue.900"
          color="blue.50"
          borderRadius="10px"
          px="18px"
          py="4px"
          fontWeight="bold"
        >
          <IconButton
            aria-label={labelName}
            variant="unstyled"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.50"
            icon={renderIcon()}
            _hover={{
              bgColor: 'blackAlpha.100',
            }}
          />
        </Tooltip>
      </ChakraLink>
    </Link>
  );
}
