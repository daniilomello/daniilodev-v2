import { SimpleGrid } from '@chakra-ui/react';
import { ArticleItem } from './article-item.component';
import { SectionTitle } from './section-title.component';

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface ArticlesPostsProps {
  posts: Post[];
}

export function ArticlesSection({ posts }: ArticlesPostsProps) {
  return (
    <>
      <SectionTitle title="Artigos ✍" link="/blog" />

      <SimpleGrid minChildWidth={['100%', '45%']}>
        {posts.map((post) => (
          <ArticleItem
            key={post.id}
            date={post.updatedAt}
            readTime={4}
            title={post.title}
            cta="Saiba mais"
            postLink={`/blog/${post.slug}`}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
