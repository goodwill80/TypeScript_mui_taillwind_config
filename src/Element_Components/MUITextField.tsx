import { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';

function MUITextField() {
  const [value, setValue] = useState<string>('');
  return (
    <Stack spacing={4}>
      {/* Variant */}
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant={'outlined'} />
        <TextField label="Name" variant={'filled'} />
        <TextField label="Name" variant={'standard'} />
      </Stack>
      {/* Variant, size and color */}
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      {/* Required, Helper text, type, disabled, readonly*/}
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" size="small" color="info" required />
        <TextField
          label="Form Input"
          size="small"
          color="error"
          helperText="Do not share your password with anyone!"
        />
        <TextField label="Password" size="small" color="info" type="password" />
        <TextField label="Disabled" size="small" color="error" disabled />
        <TextField label="Read only" inputProps={{ readOnly: true }} />
      </Stack>
      {/* Prefixes i.e. kg, $ and ect. using InputAdornment  */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      {/* OnChange */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          size="small"
          color="info"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone!'
          }
        />
      </Stack>
    </Stack>
  );
}
export default MUITextField;
