import type { NextPage } from 'next';
import { Header } from '../components/header.component';
import { MainSection } from '../components/main-section.component';
import { SeparatorItem } from '../components/seperator.component';
import BlogPageTitle from '../components/projects-page-title.component';
import { BlogPagePosts } from '../components/blog-page-posts.component';

const Blog: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection>
        <BlogPageTitle />
        <SeparatorItem />
        <BlogPagePosts />
      </MainSection>
    </>
  );
};

export default Blog;
