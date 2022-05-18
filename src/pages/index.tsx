import Prismic from '@prismicio/client';
import type { GetStaticProps } from 'next';
import { Header } from '../components/header.component';
import { AboutSection } from '../components/about-section.component';
import { AvatarSection } from '../components/avatar-section.component';
import { MainSection } from '../components/main-section.component';
import { ExperiencesSection } from '../components/experiences-section.component';
import { SeparatorItem } from '../components/seperator.component';
import { ProjectsSection } from '../components/projects-section.component';
import { ArticlesSection } from '../components/articles-section.components';
import { getPrismicClient } from '../services/prismic.config';
import { RichText } from 'prismic-dom';
import { projects } from '../data/projects';
import Head from 'next/head';

interface Posts {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface HomeProps {
  posts: Posts[];
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

export default function Home({ posts, projectsList }: HomeProps) {
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
        <SeparatorItem />
        <ArticlesSection posts={posts} />
      </MainSection>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'blog')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 2,
    }
  );

  const posts = response.results.map((post: any) => {
    return {
      id: post.id,
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: RichText.asText(post.data.content).slice(0, 175) + '[...]',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      ),
    };
  });

  return {
    props: {
      posts,
      projectsList: projects,
    },
  };
};
