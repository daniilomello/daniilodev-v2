import Link from 'next/link';
import { Heading, HStack, Link as ChakraLink, Button } from '@chakra-ui/react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { ProjectItem } from './project-Item.component';

export function ProjectsSection() {
  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h3" fontSize="24px" mb="32px">
          Projetos 🤘
        </Heading>

        <Link href="/projects" passHref={true}>
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

      <HStack>
        <ProjectItem />
        <ProjectItem />
      </HStack>
    </>
  );
}
