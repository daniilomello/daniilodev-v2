import { SimpleGrid } from '@chakra-ui/react';
import { ArticleItem } from './article-item.component';
type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  cover: string;
};

interface ArticlesPostsProps {
  posts: Post[];
}
export function BlogPagePosts({ posts }: ArticlesPostsProps) {
  return (
    <>
      <SimpleGrid minChildWidth={['100%', '45%']} spacing="5px">
        {posts.map((post) => (
          <ArticleItem
            key={post.id}
            coverImage={post.cover}
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
