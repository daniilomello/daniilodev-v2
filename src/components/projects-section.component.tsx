import { HStack } from '@chakra-ui/react';
import { ProjectItem } from './project-Item.component';
import { SectionTitle } from './section-title.component';

export function ProjectsSection() {
  return (
    <>
      <SectionTitle title="Projetos 🤘" link="/projects" />
      <HStack>
        <ProjectItem />
        <ProjectItem />
      </HStack>
    </>
  );
}
