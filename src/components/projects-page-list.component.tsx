import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { ProjectsPageItem } from './projects-page-Item.component';

export default function ProjectsPageList() {
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
          <ProjectsPageItem
            name="Portfólio v2"
            tags="NextJS - Chakra UI - Prismic"
            live="/"
            asLive={true}
            figma="/"
            asFigma={true}
            loom="/"
            asLoom={true}
          />

          <ProjectsPageItem
            name="Ignews"
            tags="NextJS - Stripe - Prismic - FaunaDB"
            live="/"
            asLive={true}
            github="/"
            asGithub={true}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
}
