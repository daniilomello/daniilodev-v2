import { SeparatorItem } from '../components/seperator.component';
import ProjectsPageTitle from '../components/projects-page-title.component';
import ProjectsPageList from '../components/projects-page-list.component';
import { MainPagesSection } from '../components/main-pages-section.component';
import { HeaderPages } from '../components/header-pages.component';
import { projects } from '../data/projects';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface ProjectProps {
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

export default function Projects({ projectsList }: ProjectProps) {
  return (
    <>
      <Head>
        <title>Projetos - Danilo Mello - Desenvolvedor Full Stack</title>
      </Head>
      <HeaderPages />
      <MainPagesSection>
        <ProjectsPageTitle />
        <SeparatorItem />
        <ProjectsPageList projectsList={projectsList} />
      </MainPagesSection>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectsList: projects,
    },
  };
};
