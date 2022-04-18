import { Heading, HStack, Stack, Box, Text } from '@chakra-ui/react';
import { ProjectIconLink } from './project-icon-link.component';

interface ProjectItemProps {
  name: string;
  description: string;
  tags: string;
  live?: string;
  github?: string;
  figma?: string;
  loom?: string;
  asGithub?: boolean;
  asFigma?: boolean;
  asLive?: boolean;
  asLoom?: boolean;
}

export function ProjectItem({
  name,
  description,
  tags,
  live,
  github,
  loom,
  figma,
  asLive = false,
  asGithub = false,
  asLoom = false,
  asFigma = false,
}: ProjectItemProps) {
  return (
    <Box p="24px" border="1px" borderColor="blue.800" borderRadius="12px">
      <Stack
        justifyContent="space-between"
        mb="24px"
        direction={['column', 'row']}
      >
        <Heading as="h3" fontSize="18px">
          {name}
        </Heading>

        <HStack spacing="2px">
          {asGithub ? (
            <ProjectIconLink
              iconLink={github}
              labelName="Repositório"
              asGithub={asGithub}
            />
          ) : null}
          {asFigma ? (
            <ProjectIconLink
              iconLink={figma}
              labelName="Layout"
              asFigma={asFigma}
            />
          ) : null}
          {asLoom ? (
            <ProjectIconLink
              iconLink={loom}
              labelName="Apresentação"
              asLoom={asLoom}
            />
          ) : null}
          {asLive ? (
            <ProjectIconLink
              iconLink={live}
              labelName="Acessar"
              asLive={asLive}
            />
          ) : null}
        </HStack>
      </Stack>
      <Text mb="24px" fontSize="18px">
        {description}
      </Text>
      <Text as="small" fontSize="12px">
        {tags}
      </Text>
    </Box>
  );
}
