import type { NextPage } from 'next';
import { SeparatorItem } from '../components/seperator.component';
import ProjectsPageTitle from '../components/projects-page-title.component';
import ProjectsPageList from '../components/projects-page-list.component';
import { MainPagesSection } from '../components/main-pages-section.component';
import { HeaderPages } from '../components/header-pages.component';

const Projects: NextPage = () => {
  return (
    <>
      <HeaderPages />
      <MainPagesSection>
        <ProjectsPageTitle />
        <SeparatorItem />
        <ProjectsPageList />
      </MainPagesSection>
    </>
  );
};

export default Projects;
