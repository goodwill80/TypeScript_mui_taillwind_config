import { Box } from '@mui/material';

// 5 main break points

function Responsiveness() {
  return (
    <Box
      sx={{
        height: '300px',
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        bgcolor: 'primary.main',
      }}
    ></Box>
  );
}

export default Responsiveness;
