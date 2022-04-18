import type { NextPage } from 'next';
import { Header } from '../components/header.component';
import { MainSection } from '../components/main-section.component';
import { SeparatorItem } from '../components/seperator.component';
import ProjectsPageTitle from '../components/projects-page-title.component';
import ProjectsPageList from '../components/projects-page-list.component';

const Projects: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection>
        <ProjectsPageTitle />
        <SeparatorItem />
        <ProjectsPageList />
      </MainSection>
    </>
  );
};

export default Projects;
