import { Box, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react';
export function ExperiencesSection() {
  return (
    <Box>
      <Heading as="h3" fontSize="24px" mb="32px">
        Experiências 👊
      </Heading>

      <VStack alignItems="start" spacing="24px">
        <HStack alignItems="center" spacing="12px">
          <Box>
            <Image
              src="/images/gabarita.png"
              boxSize="49px"
              objectFit="cover"
              alt="Logo Gabarita"
            />
          </Box>
          <Box>
            <Heading as="h5" fontSize="18px" fontWeight="bold">
              Desenvolvedor Front-end
            </Heading>
            <Text as="h6" fontSize="16px" color="blue.600">
              Gabaritalab - 2021 - Atualmente
            </Text>
          </Box>
        </HStack>

        <HStack alignItems="center" spacing="12px">
          <Box>
            <Image
              src="/images/r8.png"
              boxSize="49px"
              objectFit="cover"
              alt="Logo Agência R8"
            />
          </Box>
          <Box>
            <Heading as="h5" fontSize="18px" fontWeight="bold">
              Desenvolvedor Full Stack
            </Heading>
            <Text as="h6" fontSize="16px" color="blue.600">
              R8 - 2019 - Atualmente
            </Text>
          </Box>
        </HStack>

        <HStack alignItems="center" spacing="12px">
          <Box>
            <Image
              src="/images/tobe.png"
              boxSize="49px"
              objectFit="cover"
              alt="Logo To be Comunicação"
            />
          </Box>
          <Box>
            <Heading as="h5" fontSize="18px" fontWeight="bold">
              Desenvolvedor Front-end
            </Heading>
            <Text as="h6" fontSize="16px" color="blue.600">
              To Be - 2016 - 2018
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
