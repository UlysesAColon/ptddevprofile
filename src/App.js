import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemAvatar, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Mongo_DB } from '../src/images/Mongo_DB.png';
import { Node_JS } from '../src/images/Node_JS.png';
import { HTML_Icon } from '../src/images/HTML_Icon.png';
import { CSS_Icon } from '../src/images/CSS_Icon.png';
import { Express_JS } from '../src/images/Express_JS.png';
import { React_Icon } from '../src/images/React_Icon.png';
import {Appbackground} from '../src/images/Appbackground.jpg';

const styles = theme => ({
  root: {
    height: 180,
    
},
container: {
    display: 'flex',
},
paper: {
    margin: theme.spacing.unit,
    color: '#555f61',
    textAlign: 'center',
    opacity: .8
},
goldborder: {
  margin: theme.spacing.unit,
  backgroundImage:  "linear-gradient(to right bottom, #90caf9, #42a5f5)",
  borderWidth:'2px',
  borderColor: '#9e9e9e',
  borderStyle: 'solid',
  color: '#616161',
  textAlign: 'center',
  opacity: .8
},
svg: {
    width: 100,
    height: 100,
},
polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
},
listitems:{
  fontSize: 16,
  alignItems: 'center',
},    
});



class App extends React.Component{
  render() {
    const { classes } = this.props;
    const list = [ "Mongodb", "Node.js", "HTML", "CSS", "Express", "React"];
    const listicons = [ Mongo_DB, Node_JS, HTML_Icon, CSS_Icon, Express_JS, React_Icon];
    const list2 = ["Cooking", "Puzzle Solving", "Crosswords", "Reading", "Miniature Wargaming", "Professional Sports"]
    console.log(list);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <br />
        <br />
        <br />
        About Me:
        <Grid container spacing={24}>
        <Grid item xs={12} >
          <div className={classes.goldborder}>
            Hello, I am Ulyses Colon. 
            <br />
            Full Stack Developer.
          </div>
        </Grid>
        <Grid item xs={2} /> 
        {/* Left Side */}
        <Grid item xs={8}>
        <Grid item xs={12}>
        <Paper className={classes.goldborder}>
        PROFILE
I am a recent Coding bootcamp graduate breaking in to the development field. After 8 years in the Culinary industry as a Sous Chef I am applying my discipline, organization, and structural solution problems towards my skills in coding. I am comfortable in high pressure environments as well as aware that a need to produce is paramount to the success of a team.
I know that hard work, perseverance, grit and creative problem-solving skills will solve the toughest of issues.
POINTS OF NOTE
I interned with the Walt Disney corporation at the Grand Floridian resort. Through my time at Disney University I learned how an engineer focused and efficient team can coordinate and execute on large tasks and systems. 

I believe that teamwork and communication are paramount for a high functioning team to succeed.
        </Paper>
        </Grid>
          <div>
          <Grid container spacing={24}>
          <Grid item xs={6} >
          <Paper className={classes.goldborder}> 
          <h4>Skills</h4>
                <List
                align='center'>
                {
                  list.map((item, i) => (
                <ListItem className={classes.listitems}
                justifyContent='center'
                title={item} >
                {item}
                </ListItem>
                  ))
                  }
                </List></Paper>
                </Grid>
                <Grid item xs={6} >
          <Paper className={classes.goldborder}> 
          <h4>Interests</h4>
                <List
                align='center'>
                {
                  list2.map((item, i) => (
                <ListItem className={classes.listitems}
                justifyContent='center'
                title={item} >
                {item}
                </ListItem>
                  ))
                  }
                </List></Paper>
                </Grid>
                </Grid>
            </div>
        </Grid>
        <Grid item xs={2} />
        {/* Right Side */}
      </Grid>
      </header>
        <div className="middlebar" > 
        <Grid container spacing={24}>
                  <Grid item xs={2}><img className="middlebarimages" src="https://material-ui.com/static/brand.png" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://d1q6f0aelx0por.cloudfront.net/product-logos/a8957077-bbcd-41cc-b6d0-2924a1492e99-node.png" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://stepanoff.org/wordpress/wp-content/uploads/html5-1920x1200.png" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="http://moocsafrica.org/wp-content/uploads/2016/07/CSS3-badge-logo-big.png" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://codecondo.com/wp-content/uploads/2017/09/ExpressJS.png" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" /></Grid>
        </Grid>
        </div>
        <div className="secondbackground">
        </div>
    </div>
  );
}}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
