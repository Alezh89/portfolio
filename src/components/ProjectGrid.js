import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import projectsData from "./projectsData.js";
import "../css/projectGrid.css";

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '90px',
    paddingBottom: '90px',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }, 
  card: {
    maxWidth: 300,    
  },
  media: {
    height: 120,
  },

}));

export default function ProjectGrid() {
  const classes = useStyles(); 
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        
        {projectsData.map(project => (
          <Card className={classes.card} style={{'height': '260px', 'margin': '20px', 'width': '300px', 'padding': '0'}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require(`./../materials/${project.id}/mainCut.jpg`)}
              title={project.id}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {project.name} 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.technologies.slice(0, project.technologies.length - 1).join(', ') + ", " + project.technologies.slice(-1)}
              </Typography>
            </CardContent>
          </CardActionArea>        
        </Card>
        ))}
      </GridList>
    </div>
  )
}


/*
<Grid item xs={6} sm={4} md={3} lg={2} lassName={classes.gridItem}>
          <GridListTile key={project.id} className='projectCardFront'>
            <img src={require(`./../materials/${project.id}/mainCut.jpg`)} alt={project.name} style={{'height': '180px'}}/>
            <GridListTileBar className='gridListTitle'              
              title={project.name}     
              subtitle={project.technologies.slice(0, project.technologies.length - 1).join(', ') + ", " + project.technologies.slice(-1)}          
            >

        <Button size="small">to the Project</Button>
      
            </GridListTileBar>   

            
          </GridListTile>     
              
          </Grid>
          */