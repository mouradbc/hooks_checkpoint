import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import './movieCard.css'
import ReactStars from "react-rating-stars-component";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:20,
  },
  media: {
    height: 140,
  },
});

export default function MovieCard({movie}) {
  const classes = useStyles();
  const {id,title,imgUrl,rate,description}=movie;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ReactStars
    count={5}
    value={rate}
    size={24}
    activeColor="#ffd700"
  />
    </Card>
  );
}
