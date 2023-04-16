import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from '@mui/material';
// Cards components are useful in creating layout for a single topic i.e. product item in a list
// Card is main container
// CardContent is where the content is
// CardActions is container for the buttons
// CardMedia is container for image or video
// Can be used as product item component
function CardComponent() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, et. Illo perspiciatis ipsa inventore expedita sit esse
            nobis blanditiis tempore nesciunt asperiores pariatur, ad
            voluptatibus nihil accusantium beatae libero consectetur!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size={'small'}>Share</Button>
          <Button size={'small'}>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardComponent;
