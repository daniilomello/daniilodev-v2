import Link from 'next/link';
import { Heading, HStack, Link as ChakraLink, Button } from '@chakra-ui/react';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface SectionTitleProps {
  title: string;
  link: string;
}

export function SectionTitle({ title, link }: SectionTitleProps) {
  return (
    <HStack justifyContent="space-between" alignItems="center" mb="32px">
      <Heading as="h3" fontSize="24px">
        {title}
      </Heading>

      <Link href={link} passHref={true}>
        <ChakraLink>
          <Button
            rightIcon={<RiArrowRightUpLine size="24px" />}
            variant="unstyled"
            fontWeight="normal"
            display="flex"
          >
            Ver todos
          </Button>
        </ChakraLink>
      </Link>
    </HStack>
  );
}
