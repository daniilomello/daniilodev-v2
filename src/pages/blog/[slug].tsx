import Prismic from '@prismicio/client';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic.config';
import { useRouter } from 'next/router';
import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import { RichText } from 'prismic-dom';
import styles from '../../styles/post.module.scss';
import { MainPagesSection } from '../../components/main-pages-section.component';
import { HeaderPages } from '../../components/header-pages.component';

interface Post {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
  cover: string;
  content: string;
  loom: string;
}

export default function BlogArticle({ post }: Post) {
  console.log(post);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <HeaderPages />
      <MainPagesSection>
        <Link href="/blog">
          <a>← Voltar</a>
        </Link>
        <Heading textAlign="center" my={10}>
          {post.title}
        </Heading>
        <Flex justifyContent="space-between" mb={2}>
          <Text as="p" color="blue.600">
            {post.updatedAt}
          </Text>
          <Text as="p" color="blue.600">
            5 min
          </Text>
        </Flex>

        <Image
          src={post.cover}
          boxSize="100%"
          height="450px"
          objectFit="cover"
          alt={post.title}
          borderRadius="12px"
          boxShadow={1}
        />

        <article
          className={styles.blogPost}
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </MainPagesSection>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.Predicates.at('document.type', 'blog'),
  ]);

  const paths = posts.results.map((post) => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('blog', String(slug), {});

  const post = {
    id: response.id,
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
    cover: response.data.cover.url,
    loom: response.data.loom.embed_url,
  };
  return {
    props: {
      post,
    },
  };
};
