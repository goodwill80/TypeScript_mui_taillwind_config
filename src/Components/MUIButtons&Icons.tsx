import { useState } from 'react';
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderLinedIcon from '@mui/icons-material/FormatUnderlined';

function MUIButton() {
  const [formats, setFormats] = useState<string | null>(null);
  console.log(formats);
  const clicked = () => {
    alert('hello');
  };

  const handleFormateChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack>
      {/* Variant */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button onClick={clicked} variant="contained">
          Contained
        </Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      {/* Color */}
      <Stack spacing={2} direction={'row'} className="space-x-2 pt-4">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>
      {/* Size */}
      <Stack display="block" spacing={2} direction="row" className="pt-4">
        <Button variant="contained" color="primary" size={'small'}>
          Small
        </Button>
        <Button variant="contained" color="secondary" size={'medium'}>
          Medium
        </Button>
        <Button variant="contained" color="success" size={'large'}>
          Large
        </Button>
      </Stack>

      {/* Button Icon */}
      <Stack display="row" spacing={2}>
        <Button
          variant="contained"
          color="info"
          startIcon={<SendIcon />}
          disableElevation
        >
          Send
        </Button>

        <Button
          variant="contained"
          color="info"
          endIcon={<SendIcon />}
          disableRipple
        >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size={'small'}>
          <SendIcon />
        </IconButton>
      </Stack>
      {/* 
      BUTTON GROUP */}
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size={'small'}
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert('left clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* TOGGLE BUTTONS AND CHANGE EVENTS*/}
      <Stack direction="row" className="pt-4">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormateChange}
          size={'medium'}
          color="success"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined " aria-label="underlined">
            <FormatUnderLinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MUIButton;
