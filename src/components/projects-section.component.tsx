import { HStack } from '@chakra-ui/react';
import { ProjectItem } from './project-Item.component';
import { SectionTitle } from './section-title.component';

export function ProjectsSection() {
  return (
    <>
      <SectionTitle title="Projetos 🤘" link="/projects" />
      <HStack>
        <ProjectItem
          name="Portfólio 2022"
          description="Site pessoal para exibir meus projetos e conteúdos."
          tags="NextJS - Chakra UI - Prismic"
          live="/"
          asLive={true}
          figma="/"
          asFigma={true}
        />
        <ProjectItem
          name="Ignews"
          description="Web app para exibir notícias apenas para assinantes mensais."
          tags="NextJS - Stripe - Prismic - FaunaDB"
          live="/"
          asLive={true}
          github="/"
          asGithub={true}
        />
      </HStack>
    </>
  );
}
