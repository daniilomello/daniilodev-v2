import { Table, Thead, Tbody, Th, Tr, TableContainer } from '@chakra-ui/react';
import { ProjectsPageItem } from './projects-page-Item.component';

interface ProjectsPageListProps {
  projectsList: {
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
  }[];
}

export default function ProjectsPageList({
  projectsList,
}: ProjectsPageListProps) {
  console.log(projectsList);

  return (
    <TableContainer>
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th display={['none', 'block']}>Stack</Th>
            <Th>Link</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projectsList.map((item) => (
            <ProjectsPageItem
              key={item.name}
              name={item.name}
              tags={item.tags}
              live={item.live}
              github={item.github}
              figma={item.figma}
              loom={item.loom}
              asLive={item.asLive}
              asGithub={item.asGithub}
              asFigma={item.asFigma}
              asLoom={item.asLoom}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
