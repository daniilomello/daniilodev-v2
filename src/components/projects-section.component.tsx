import { Stack } from '@chakra-ui/react';
import { ProjectItem } from './project-Item.component';
import { SectionTitle } from './section-title.component';

export function ProjectsSection() {
  return (
    <>
      <SectionTitle title="Projetos 🤘" link="/projects" />
      <Stack direction={['column', 'row']}>
        <ProjectItem
          name="Portfólio 2022"
          description="Site pessoal para exibir meus projetos e conteúdos."
          tags="NextJS - Chakra UI - Prismic"
          live="/"
          asLive={true}
          figma="/"
          asFigma={true}
          loom="/"
          asLoom={true}
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
      </Stack>
    </>
  );
}
