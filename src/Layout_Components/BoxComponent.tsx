// Box is a replacement for div
import { Box } from '@mui/material';

function BoxComponent() {
  return (
    // component include article, section, span and etc
    <>
      <Box
        className=" hover:bg-blue-500"
        component="span"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
        }}
      >
        Learn TypeScript
      </Box>
      {/* Display Properties - Flex container */}
      <Box
        className="justify-center items-center text-white"
        display="flex"
        height="100px"
        width="60vw"
        bgcolor={'success.light'}
        p={2}
      >
        Box Component
      </Box>
    </>
  );
}

export default BoxComponent;
