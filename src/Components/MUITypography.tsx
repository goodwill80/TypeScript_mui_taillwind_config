import { Typography } from '@mui/material';

function MUITypography() {
  return (
    <div className="w-[50vw] p-10">
      <Typography variant={'h1'} className="text-red-300">
        h1 Heading
      </Typography>
      {/* gutterBottom - add space to bottem */}
      <Typography variant={'h2'} gutterBottom>
        h2 Heading
      </Typography>
      <Typography variant={'h3'}>h3 Heading</Typography>
      <Typography variant={'h4'} component="h1">
        h4 Heading
      </Typography>
      <Typography variant={'h5'} className="text-blue-500 hover:text-red-500">
        h5 Heading
      </Typography>
      <Typography variant={'h6'}>h6 Heading</Typography>
      <Typography variant={'subtitle1'}>Subtitle1 Heading</Typography>
      <Typography variant={'subtitle2'}>Subtitle2 Heading</Typography>
      <Typography variant={'body1'}>
        body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam dolorum voluptatem veritatis nisi, eum tenetur neque rem non
        sequi commodi laborum consequuntur obcaecati magnam quod similique sit.
        Molestiae, beatae.
      </Typography>
      <Typography variant={'body2'}>
        body2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consequuntur ducimus perspiciatis, reiciendis dignissimos vero cum, quo
        itaque ex distinctio voluptatem corporis praesentium ut fugiat? Nobis
        distinctio ea non iusto accusamus.
      </Typography>
    </div>
  );
}

export default MUITypography;
