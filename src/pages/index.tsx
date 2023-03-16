import type { GetStaticProps } from 'next';
import { Header } from '../components/header.component';
import { AboutSection } from '../components/about-section.component';
import { AvatarSection } from '../components/avatar-section.component';
import { MainSection } from '../components/main-section.component';
import { ExperiencesSection } from '../components/experiences-section.component';
import { SeparatorItem } from '../components/seperator.component';
import { ProjectsSection } from '../components/projects-section.component';
import { projects } from '../data/projects';
import Head from 'next/head';

interface HomeProps {
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

export default function Home({ projectsList }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - Danilo Mello - Desenvolvedor Full Stack</title>
      </Head>
      <Header />
      <MainSection>
        <AvatarSection />
        <AboutSection />
        <SeparatorItem />
        <ExperiencesSection />
        <SeparatorItem />
        <ProjectsSection projectsList={projectsList} />
      </MainSection>
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
