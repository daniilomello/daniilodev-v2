import { IconButton, Tooltip } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';

export function AvaliableTooltip() {
  return (
    <Tooltip
      label="Indisponível"
      aria-label="Indisponível"
      bg="red.600"
      color="blue.50"
      borderRadius="12px"
      px="18px"
      py="4px"
      fontWeight="bold"
    >
      <IconButton
        as="span"
        aria-label="Indisponível Icon"
        borderRadius="50%"
        variant="unstyled"
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="red.600"
        icon={<RiErrorWarningLine size="24px" />}
        _hover={{
          bgColor: 'whiteAlpha.50',
        }}
      />
    </Tooltip>
  );
}
