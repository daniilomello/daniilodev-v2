import { HStack } from '@chakra-ui/react';
import { ArticleItem } from './article-item.component';
import { SectionTitle } from './section-title.component';

export function ArticlesSection() {
  return (
    <>
      <SectionTitle title="Artigos ✍" link="/blog" />
      <HStack>
        <ArticleItem
          coverImage="https://picsum.photos/500/500"
          date="20 de abril de 2022"
          readTime={4}
          title="Criando uma landing page com NextJS"
          cta="Saiba mais"
          postLink="/posts"
        />

        <ArticleItem
          coverImage="https://picsum.photos/500/501"
          date="20 de abril de 2022"
          readTime={8}
          title="Iniciando um projeto do zero usando a CLI do Github"
          cta="Veja como"
          postLink="/posts"
        />
      </HStack>
    </>
  );
}
