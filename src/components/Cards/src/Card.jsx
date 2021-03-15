import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {dataset} = props;
  return (
    dataset.map((data,index) => {
      return(
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={data.img_url}
                    title={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <p>{data.activity}</p>
                      <p>Timings: {data.timing}</p>
                      Contact : {data.phoneNumber}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <a href={data.web_url}>
                      Learn More
                    </a>
                  </Button>
                </CardActions>
              </Card>
              </Grid>
      )
    }
    )
  )
}
