// Stack is used to manage layout in one dimension, either verticle or horizontal
import { Stack, Box, Divider } from '@mui/material';

function StackComponent() {
  return (
    // Direction = row, column, column-reverse
    // Divider prop
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        className="justify-center items-center text-white"
        display="flex"
        height="100px"
        width="20vw"
        bgcolor={'primary.light'}
        p={2}
      >
        Box Component
      </Box>
      <Box
        className="justify-center items-center text-white"
        display="flex"
        height="100px"
        width="20vw"
        bgcolor={'secondary.light'}
        p={2}
      >
        Box Component 2
      </Box>
    </Stack>
  );
}

export default StackComponent;
