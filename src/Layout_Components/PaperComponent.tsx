import { Paper } from '@mui/material';

// Paper component can be used to established segments of UI
// It is rounded in default
// Most used to build the card component

function PaperComponent() {
  // Elevation is shadow
  return <Paper sx={{ padding: '32px' }} elevation={4}></Paper>;
}

export default PaperComponent;
