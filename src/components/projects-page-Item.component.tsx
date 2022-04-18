import { HStack, Tr, Td } from '@chakra-ui/react';
import { ProjectIconLink } from './project-icon-link.component';

interface ProjectItemProps {
  name: string;
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

export function ProjectsPageItem({
  name,
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
    <>
      <Tr>
        <Td>{name}</Td>
        <Td>{tags}</Td>
        <Td>
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
        </Td>
      </Tr>
    </>
  );
}
