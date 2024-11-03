import { Avatar, Box, Grid, Typography } from '@mui/material';
import '../Home.css';

interface CardProps {
  index: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  imageVariant?: 'rounded' | 'circular' | 'square';
}

const Card = ({
  index,
  image,
  imageAlt,
  title,
  description,
  imageVariant,
}: CardProps) => {
  return (
    <Grid item key={index}>
      <Box
        className="Card"
        sx={{
          color: 'text.primary',
          '&:hover': {
            cursor: 'pointer',
            bgcolor: 'action.hover',
            transition: 'all ease 0.3s',
          },
        }}
      >
        <Avatar
          src={image}
          alt={imageAlt}
          variant={imageVariant}
          sx={{
            bgcolor: 'primary.main',
            width: '100%',
            height: 'auto',
            maxHeight: 185,
            mb: 1,
          }}
        />
        <Typography variant="subtitle1" align="left">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

Card.defaultProps = {
  imageVariant: 'rounded',
};

export default Card;