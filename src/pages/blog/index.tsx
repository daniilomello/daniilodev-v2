import Prismic from '@prismicio/client';
import type { GetStaticProps } from 'next';
import { SeparatorItem } from '../../components/seperator.component';
import BlogPageTitle from '../../components/blog-page-title.component';
import { BlogPagePosts } from '../../components/blog-page-posts.component';
import { getPrismicClient } from '../../services/prismic.config';
import { RichText } from 'prismic-dom';
import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { MainPagesSection } from '../../components/main-pages-section.component';
import { HeaderPages } from '../../components/header-pages.component';

interface Posts {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  cover: string;
}

interface PostPagination {
  next_page: string;
  results: Posts[];
}

interface BlogProps {
  postsPagination: PostPagination;
}

export default function Blog({ postsPagination }: BlogProps): JSX.Element {
  const [posts, setPosts] = useState<Posts[]>(postsPagination.results);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(): Promise<void> {
    if (currentPage !== 1 && nextPage === null) {
      return;
    }

    const postsResults = await fetch(`${nextPage}`).then((response) =>
      response.json()
    );

    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);

    const newPosts = postsResults.results.map((post) => {
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
        cover: post.data.cover.url,
      };
    });

    setPosts([...posts, ...newPosts]);
  }

  return (
    <>
      <HeaderPages />
      <MainPagesSection>
        <BlogPageTitle />
        <SeparatorItem />
        <BlogPagePosts posts={posts} />
        {nextPage && (
          <Flex justifyContent="center" mt="24px">
            <Button colorScheme="pink" onClick={handleNextPage}>
              Carregar mais
            </Button>
          </Flex>
        )}
      </MainPagesSection>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'blog')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 4,
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
      cover: post.data.cover.url,
    };
  });

  const postsPagination = {
    next_page: response.next_page,
    results: posts,
  };

  return {
    props: {
      postsPagination,
    },
  };
};
