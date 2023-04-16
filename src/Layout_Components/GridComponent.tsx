import { Box, Grid } from '@mui/material';
// Grid has 2 variation - Parent for "container", and children for "item"
// Grid has a max of 12 columns (imaginary)
// Each item grid can take up one or more columns as width
// The 5 mobile break points are xs - mobile, sm - tablet, md - desktop, lg/xl for larger monitors
// xs={6} prop means for mobile size, assign 6/12 columns (50%) for 01 x grid item

function GridComponent() {
  return (
    <>
      <Grid
        container
        my={4}
        px={6}
        spacing={2}
        rowSpacing={1}
        columnSpacing={1}
      >
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2} className="text-center">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={'auto'}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default GridComponent;
