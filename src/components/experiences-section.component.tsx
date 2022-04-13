import { Box, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react';
import { CompanyItem } from './company-item.component';
export function ExperiencesSection() {
  return (
    <Box>
      <Heading as="h3" fontSize="24px" mb="32px">
        Experiências 👊
      </Heading>

      <VStack alignItems="start" spacing="24px">
        <CompanyItem
          companyImage="/images/gabarita.png"
          role="Desenvolvedor Front-end"
          companyName="Gabaritalab - 2021 - Atualmente"
        />

        <CompanyItem
          companyImage="/images/r8.png"
          role="Desenvolvedor Full Stack"
          companyName="R8 - 2019 - Atualmente"
        />

        <CompanyItem
          companyImage="/images/tobe.png"
          role="Desenvolvedor Front-end"
          companyName="To Be - 2016 - 2018"
        />
      </VStack>
    </Box>
  );
}
