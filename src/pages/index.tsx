import type { NextPage } from 'next';
import { Header } from '../components/header.component';
import { AboutSection } from '../components/about-section.component';
import { AvatarSection } from '../components/avatar-section.component';
import { MainSection } from '../components/main-section.component';
import { ExperiencesSection } from '../components/experiences-section.component';
import { SeparatorItem } from '../components/seperator.component';
import { ProjectsSection } from '../components/projects-section.component';
import { ArticlesSection } from '../components/articles-section.components';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection>
        <AvatarSection />
        <AboutSection />
        <SeparatorItem />
        <ExperiencesSection />
        <SeparatorItem />
        <ProjectsSection />
        <SeparatorItem />
        <ArticlesSection />
      </MainSection>
    </>
  );
};

export default Home;
