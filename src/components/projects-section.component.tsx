import { SimpleGrid } from '@chakra-ui/react';
import { ProjectItem } from './project-Item.component';
import { SectionTitle } from './section-title.component';

interface ProjectsSectionProps {
  projectsList: {
    name: string;
    tags: string;
    description: string;
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

export function ProjectsSection({ projectsList }: ProjectsSectionProps) {
  return (
    <>
      <SectionTitle title="Projetos 🤘" link="/projects" />
      <SimpleGrid minChildWidth={['100%', '45%']} spacing="15px">
        {projectsList.slice(0, 2).map((item) => (
          <ProjectItem
            key={item.name}
            name={item.name}
            tags={item.tags}
            description={item.description}
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
      </SimpleGrid>
    </>
  );
}
