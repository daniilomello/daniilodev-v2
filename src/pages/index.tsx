import type { NextPage } from 'next';
import {
  Box,
  IconButton,
  Container,
  Link as ChakraLink,
  Tooltip,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Header } from '../components/header.component';
import { AboutSection } from '../components/about-section.component';
import { AvatarSection } from '../components/avatar-section.component';
import { MainSection } from '../components/main-section.component';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection>
        <AvatarSection />
        <AboutSection />
      </MainSection>
    </>
  );
};

export default Home;
