import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "gatsby"



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textDecoration: 'none',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    textDecoration: 'none',

  },
  expand: {
      
    textDecoration: 'none',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    textDecoration: 'none',
    backgroundColor: red[500],
  },
}));

export interface CardProps {
    title: any;
    image: any;
    subtitle: any;
    author: any;
    slug: any
  }

export const ComplexCard: React.FC<CardProps> = ({title, image, author, subtitle, slug}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Link to={`${slug}`}> {title} </Link> } ////////////////////////////////////////////////
        subheader="Brought to you by Ali"
      />


{<Link to={`${slug}`}> 
      <CardMedia
        className={classes.media}
        image={`/${image}`}  ///////////////////////////////////////
        title={title}   ///////////////////////////////////////
      />
</Link> }

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
             {`${subtitle} by ${author}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
        //   onClick={handleExpandClick}
        //   aria-expanded={expanded}
        //   aria-label="show more"
        >
          
        </IconButton>
      </CardActions>
    </Card>
  );
}