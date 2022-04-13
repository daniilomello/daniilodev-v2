import { Box, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react';

interface CompanyItemProps {
  companyImage: string;
  role: string;
  companyName: string;
}

export function CompanyItem({
  companyImage,
  role,
  companyName,
}: CompanyItemProps) {
  return (
    <HStack alignItems="center" spacing="12px">
      <Box>
        <Image
          src={companyImage}
          boxSize="49px"
          objectFit="cover"
          alt={companyName}
        />
      </Box>
      <Box>
        <Heading as="h5" fontSize="18px" fontWeight="bold">
          {role}
        </Heading>
        <Text as="h6" fontSize="16px" color="blue.600">
          {companyName}
        </Text>
      </Box>
    </HStack>
  );
}
