import { HStack } from '@chakra-ui/react';
import { ArticleItem } from './article-item.component';
import { SectionTitle } from './section-title.component';

export function ArticlesSection() {
  return (
    <>
      <SectionTitle title="Artigos ✍" link="/blog" />
      <HStack>
        <ArticleItem />
        <ArticleItem />
      </HStack>
    </>
  );
}
