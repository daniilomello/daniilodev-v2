import { Box } from '@chakra-ui/react';
import { AvatarItem } from './avatar-item.component';
import { AvaliableTooltip } from './avaliable-tooltip.component';

export function AvatarSection() {
  return (
    <Box
      as="section"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <AvatarItem />
      <AvaliableTooltip />
    </Box>
  );
}
