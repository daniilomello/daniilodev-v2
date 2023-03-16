import { Box, Link as ChakraLink, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { SocialIcons } from './social-icons.component';

export function AboutSection() {
  return (
    <Box as="section" mt="48px">
      <Heading as="h3" fontSize="24px" mb="24px">
				Olá, bem vindo! 👋
      </Heading>
      <Text fontSize="18px">
				Sou desenvolvedor Front-end há mais de 7 anos. Hoje estou me especializando em desenvolvimento Back-end com React e Node. <br /><br />Durante minha carreira, tive a oportunidade de trabalhar com agências, startups e diversos tipos de empreendedores, criando todos os tipos de site e aplicações.<br /><br />
			</Text>

			<Text fontSize="18px">
				Atualmente, trabalho na <Link href="https://t10.digital/?origin=daniilo.dev" passHref={true}>
          <ChakraLink
            as="a"
            rel="nofollow"
            target="_blank"
            color="pink.200"
            fontWeight="bold"
          >@t10.digital,</ChakraLink></Link> uma startup localizada em Uberlândia, onde tenho a oportunidade de me desenvolver cada vez mais e aprender com uma equipe incrível. <br /><br />Estou sempre em busca de novos desafios e acredito que a tecnologia é uma ferramenta poderosa para transformar a vida das pessoas. Caso queira entrar em contato comigo, fique à vontade para me encontrar nas minhas redes sociais. <br /><br />Vamos criar algo incrível juntos! 🤘
      </Text>

      <SocialIcons />
    </Box>
  );
}
